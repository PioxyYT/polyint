"""Point d'entrée FastAPI exposant l'API d'analyse Exif."""

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import subprocess
import tempfile
import json
import os
from pathlib import Path
from uuid import uuid4
from typing import Any

app = FastAPI(title="ExifTool API", version="0.1.0")

# Autorise les appels depuis le frontend Next.js en local (port 3000).
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


def run_exiftool(file_path: str) -> Any:
    """Exécute ExifTool sur ``file_path`` et renvoie le JSON parsé."""
    try:
        result = subprocess.run(
            ["exiftool", "-json", file_path],
            check=True,
            capture_output=True,
            text=True,
        )
    except FileNotFoundError as exc:
        raise HTTPException(status_code=500, detail="ExifTool introuvable dans le conteneur") from exc
    except subprocess.CalledProcessError as exc:
        raise HTTPException(status_code=500, detail=f"Erreur ExifTool: {exc.stderr.strip()}") from exc

    try:
        data = json.loads(result.stdout)
    except json.JSONDecodeError as exc:
        raise HTTPException(status_code=500, detail="Sortie ExifTool invalide") from exc

    if not data:
        raise HTTPException(status_code=404, detail="Aucune métadonnée trouvée")

    return data[0]


@app.post("/exif")
async def extract_exif(file: UploadFile = File(...)):
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Le fichier doit être une image")

    original_filename = file.filename or f"upload-{uuid4().hex}"
    safe_filename = os.path.basename(original_filename) or f"upload-{uuid4().hex}"

    with tempfile.TemporaryDirectory() as tmp_dir:
        target_path = Path(tmp_dir) / safe_filename
        contents = await file.read()
        target_path.write_bytes(contents)

        metadata = run_exiftool(str(target_path))

    # Ajoute le nom d'origine pour clarifier la sortie côté client.
    metadata.setdefault("OriginalFileName", safe_filename)

    return JSONResponse(content=metadata)


@app.get("/health")
def healthcheck():
    """Permet un test rapide de disponibilité (utilisé pour les probes)."""

    return {"status": "ok"}
