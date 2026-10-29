# TravelLens AI 🌍🏛️
> **Global Smart Heritage Explorer**  
> *Point your camera. Discover the story. Travel smarter.*

---

## 📌 Project Overview
**TravelLens AI** is an AI-powered smart travel companion designed to solve key tourism challenges: scattered information, seasonal guide shortages, language barriers, and undocumented local folklore.

## Problem Statement

Travel information is often scattered across multiple sources. Travellers may struggle to find reliable historical information, access local cultural knowledge, overcome language and connectivity barriers, and discover nearby services and safety information.

Local stories and traditions can also remain undocumented or difficult for visitors to find.

TravelLens AI aims to bring landmark discovery, trusted heritage knowledge, verified local voices, and travel assistance together in one platform.

## Objectives

- Make landmark information easier to discover.
- Present historical information with references.
- Preserve local stories through attributed and reviewed contributions.
- Help travellers explore nearby attractions and travel services.
- Design for multilingual accessibility and low-connectivity environments.
- Build a modular architecture that can expand to new destinations.

## Features in This Prototype

- Searchable landmark directory.
- Landmark cards with sample descriptions.
- Historical and travel information panels.
- Image upload and local preview.
- Community story contribution preview.
- Responsive interface for desktop and mobile.
- Sample landmark records stored in JSON.

## Proposed Future Features

- AI landmark recognition using a trained CNN or TensorFlow Lite model.
- Image preprocessing using OpenCV.
- Trusted landmark database and API integration.
- Verified local folklore and community moderation.
- Maps, nearby attractions, and smart routes.
- OCR and currency conversion.
- Multilingual AI travel companion.
- Emergency-service discovery.
- Offline landmark recognition.

These future features are planned integrations and are not implemented in the current static prototype.

## Technology Stack

| Component | Technology |
| --- | --- |
| User interface | HTML, CSS, JavaScript |
| Sample landmark data | JSON |
| Proposed image processing | OpenCV |
| Proposed recognition | CNN / TensorFlow Lite |
| Proposed backend | Node.js or Django REST |
| Proposed storage | Firebase, PostgreSQL, or SQLite |
| Proposed maps | Mapping and geolocation APIs |
| Proposed OCR | Google ML Kit or Tesseract |

## ✨ Key Features

- 📸 **AI Landmark Recognition:** Instant identification using live camera feed, OpenCV preprocessing, and CNN models.
- 📜 **Verified Heritage & Stories:** Documented history and oral traditions from trusted sources.
- 🗺️ **Smart Routes & Assistance:** Crowd-avoiding paths, nearby attractions locator, and 24/7 multilingual AI companion.
- 💱 **Travel Tools:** Currency conversion with camera OCR and emergency service locator.
---

## Repository Structure

```text
TravelLens-AI/
├── index.html
├── css/style.css
├── js/app.js
├── data/landmarks.json
├── docs/architecture.md
├── docs/limitations.md
├── docs/demo-script.md
├── README.md
├── .gitignore
└── LICENSE
```

## Run the Prototype

The website can be hosted using GitHub Pages.

1. Open the repository.
2. Go to Settings.
3. Open Pages.
4. Under Build and deployment, select Deploy from a branch.
5. Select the `main` branch and the `/ (root)` folder.
6. Click Save.
7. Wait for the published site link to appear on the Pages settings screen.

The website entry point is `index.html`.

For local testing, use a local web server rather than opening `index.html` directly, because the browser may block loading the JSON file.

## Data Quality and Trust

The included records are starter examples. Check historical claims, image permissions, and travel details before using them publicly.

Community stories must be attributed appropriately and reviewed before being described as verified. Do not publish private information or unverified emergency details.

## Current Limitations

- No trained landmark-recognition model.
- No backend or persistent database.
- Community contributions are preview-only.
- No live GPS, routing, or nearby-service API.
- No integrated OCR or currency-rate service.
- No offline AI model or production authentication.

See [docs/limitations.md](docs/limitations.md) for details.

## Team

**Team name:** She Coders

- Ananya Bansal
- Kanishka Rana
- Priya
- Pratika Verma

**Track:** AI/ML + Open Innovation

## Project Vision

Trusted heritage knowledge + verified local voices + AI travel assistance in one platform.
