# Image de base légère incluant Python 3.12
FROM python:3.12-slim

# Installation du binaire ExifTool via apt (aucune reco inutile)
RUN apt-get update && apt-get install -y --no-install-recommends \
    exiftool \
    && rm -rf /var/lib/apt/lists/*

# Répertoire de travail de l'application
WORKDIR /app

# Installation des dépendances Python
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copie du code FastAPI
COPY app ./app

# Port HTTP exposé par Uvicorn
EXPOSE 8000

# Commande de démarrage du serveur ASGI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
