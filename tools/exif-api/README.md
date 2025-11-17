# API ExifTool (FastAPI)

Ce dossier contient un micro-service FastAPI encapsulant ExifTool afin d'extraire les métadonnées d'images pour l'interface Next.js.

## Structure

- `Dockerfile` : image de production basée sur `python:3.12-slim`, installant ExifTool et lançant Uvicorn.
- `docker-compose.yml` : configuration pour exécuter le service en local (`localhost:8000`).
- `requirements.txt` : dépendances Python minimales (`fastapi`, `uvicorn`, `python-multipart`).
- `app/main.py` : code FastAPI (routes `/exif` et `/health`).

## Lancer en local

```bash
cd tools/exif-api
docker compose up --build
```

L'API est disponible sur `http://localhost:8000` (Swagger : `/docs`).

## Routes

- `GET /health` : vérification rapide que le service est en ligne.
- `POST /exif` : upload d'une image (`multipart/form-data`) → renvoie les métadonnées JSON brutes d'ExifTool.

## Notes

- Les fichiers uploadés sont écrits dans un dossier temporaire en conservant le nom d'origine.
- Seules les origines `localhost:3000` et `127.0.0.1:3000` sont autorisées via CORS (configurable dans `main.py`).



