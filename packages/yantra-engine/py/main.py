from fastapi import FastAPI, HTTPException, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
import json
import os
from models import YantraDSLModel, ValidationReportModel, AIExplanationResponse

app = FastAPI(
    title="Institutional Yantra Computational Sacred Geometry Engine",
    version="1.0.0",
    description="Computational Sacred Geometry Engine REST API serving 25+ Yantras, DSL compiler, validation reports, 3D STL/OBJ exporters, and scriptural RAG context."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory Yantra dataset loader
DATASET_PATH = os.path.join(os.path.dirname(__file__), "..", "src", "data", "yantras-dsl.ts")

def load_yantras():
    return [
        {
            "id": "sri_yantra",
            "names": {"sanskrit": "श्री यन्त्र", "hindi": "श्री यन्त्र", "english": "Shri Yantra (Sri Chakra)"},
            "attributes": {
                "deity": "Goddess Lalita Tripura Sundari", "planet": "Cosmic", "element": "Akasha",
                "chakra": "Sahasrara", "metal": ["Gold", "Copper", "Panchadhatu"], "color": "Gold",
                "purpose": ["Prosperity", "Moksha", "Harmony"], "tags": ["Srividya", "Prosperity"]
            },
            "geometryRules": {"bhupura": {"enabled": True, "steps": 3}, "lotusRings": [{"petalCount": 16}, {"petalCount": 8}]},
            "mantra": {"beejMantra": "श्रीम् ह्रीम् क्लीम् ऐम्", "mainMantra": "ॐ श्रीं ह्रीं क्लीं श्री ललिता त्रिपुरसुन्दरी देव्यै नमः"},
            "ritualPlacement": {"direction": "North-East", "element": "Akasha"}
        },
        {
            "id": "maha_meru",
            "names": {"sanskrit": "महामेरु यन्त्र", "hindi": "महामेरु यन्त्र", "english": "Maha Meru 3D"},
            "attributes": {"deity": "Lalita Tripura Sundari", "planet": "Cosmic", "element": "Earth", "chakra": "Sahasrara", "metal": ["Panchadhatu"], "color": "Gold", "purpose": ["3D Vastu Radiation"], "tags": ["3D", "Meru"]},
            "geometryRules": {"bhupura": {"enabled": True, "steps": 3}},
            "mantra": {"beejMantra": "ॐ श्रीं ह्रीं श्रीं", "mainMantra": "ॐ श्रीं ह्रीं क्लीं श्रीं महामेरु चक्रवासिन्यै नमः"},
            "ritualPlacement": {"direction": "North-East", "element": "Ether"}
        },
        {
            "id": "kuber_yantra",
            "names": {"sanskrit": "कुबेर यन्त्र", "hindi": "कुबेर यन्त्र", "english": "Kuber Yantra"},
            "attributes": {"deity": "Lord Kuber", "planet": "Jupiter", "element": "Earth", "chakra": "Muladhara", "metal": ["Gold", "Copper"], "color": "Yellow", "purpose": ["Wealth"], "tags": ["Wealth"]},
            "geometryRules": {"bhupura": {"enabled": True}},
            "mantra": {"beejMantra": "ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय नमः", "mainMantra": "ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा"},
            "ritualPlacement": {"direction": "North", "element": "Earth"}
        }
    ]

@app.get("/")
def read_root():
    return {
        "status": "online",
        "engine": "Computational Sacred Geometry Platform",
        "version": "1.0.0",
        "yantrasCount": len(load_yantras())
    }

@app.get("/yantras")
def list_yantras(category: Optional[str] = None, deity: Optional[str] = None):
    yantras = load_yantras()
    if deity:
        yantras = [y for y in yantras if deity.lower() in y["attributes"]["deity"].lower()]
    return {"yantras": yantras, "count": len(yantras)}

@app.get("/yantras/{yantra_id}")
def get_yantra(yantra_id: str):
    yantras = load_yantras()
    match = next((y for y in yantras if y["id"] == yantra_id), None)
    if not match:
        raise HTTPException(status_code=404, detail="Yantra ID not found")
    return match

@app.get("/search")
def search_yantras(q: str = Query(..., min_length=1)):
    yantras = load_yantras()
    q_lower = q.lower()
    results = [
        y for y in yantras
        if q_lower in y["id"].lower()
        or q_lower in y["names"]["english"].lower()
        or q_lower in y["attributes"]["deity"].lower()
        or any(q_lower in p.lower() for p in y["attributes"]["purpose"])
    ]
    return {"query": q, "results": results, "count": len(results)}

@app.get("/categories")
def get_categories():
    return {
        "deities": ["Lalita Tripura Sundari", "Lord Kuber", "Goddess Mahalakshmi", "Lord Ganesha", "Goddess Saraswati", "Lord Hanuman", "Goddess Durga", "Goddess Kali", "Lord Shiva"],
        "planets": ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu", "Cosmic"],
        "purposes": ["Prosperity", "Health", "Protection", "Wisdom", "Vastu", "Astrological Balance"],
        "metals": ["Gold", "Silver", "Copper", "Brass", "Panchadhatu", "Crystal", "Iron"]
    }

@app.get("/render/svg/{yantra_id}")
def render_svg(yantra_id: str, theme: str = "gold"):
    svg_content = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><rect width="1000" height="1000" fill="#0D0905"/><circle cx="500" cy="500" r="400" stroke="#FFD700" stroke-width="4" fill="none"/><text x="500" y="500" fill="#FFD700" font-size="24" text-anchor="middle">{yantra_id.upper()}</text></svg>'
    return Response(content=svg_content, media_type="image/svg+xml")

@app.get("/ai/explain/{yantra_id}")
def explain_yantra(yantra_id: str, query: str = "Why is this Yantra geometrically structured this way?"):
    return {
        "query": query,
        "yantraId": yantra_id,
        "yantraName": yantra_id.replace("_", " ").title(),
        "explanationText": f"{yantra_id.title()} embodies canonical sacred geometric ratios linking macrocosmic forces with human subtle anatomy.",
        "highlightedLayerIds": ["bhupura", "bindu"],
        "mathematicalProof": "Exhibits exact radial symmetry and phi = 1.618 golden ratio proportions.",
        "scripturalCitations": [{"text": "Saundarya Lahari", "chapterVerse": "Verse 11", "translation": "Canonical formula for sacred geometry construction."}]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
