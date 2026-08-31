from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class YantraNames(BaseModel):
    sanskrit: str
    hindi: str
    english: str
    alternateNames: List[str] = []

class YantraAttributes(BaseModel):
    deity: str
    planet: str
    element: str
    chakra: str
    metal: List[str]
    color: str
    purpose: List[str]
    benefits: List[str] = []
    precautions: List[str] = []
    tags: List[str] = []

class YantraDSLModel(BaseModel):
    id: str
    version: str = "1.0.0"
    traditionVariant: str = "Traditional"
    names: YantraNames
    attributes: YantraAttributes
    geometryRules: Dict[str, Any]
    layers: List[Dict[str, Any]] = []
    scripturalReferences: List[Dict[str, Any]] = []
    mantra: Dict[str, Any] = {}
    ritualPlacement: Dict[str, Any] = {}
    research: Dict[str, Any] = {}

class ValidationReportModel(BaseModel):
    yantraId: str
    isValid: bool
    score: int
    checks: List[Dict[str, Any]]
    timestamp: str

class AIExplanationResponse(BaseModel):
    query: str
    yantraId: str
    yantraName: str
    explanationText: str
    highlightedLayerIds: List[str]
    mathematicalProof: str
    scripturalCitations: List[Dict[str, Any]]
