
# TravelLens AI — System Architecture

## 1. Overview

TravelLens AI is designed as a modular travel and heritage platform with a user interface, landmark-recognition pipeline, knowledge layer, and travel-assistance services.

## 2. Proposed Workflow

1. The traveller captures or selects a landmark image.
2. Image preprocessing prepares the image for recognition.
3. A trained CNN or TensorFlow Lite model predicts a landmark class.
4. The predicted landmark is matched with a landmark database or API.
5. The knowledge layer retrieves historical information and reviewed local stories.
6. Optional travel services provide nearby attractions, routes, OCR, currency information, and safety resources.
7. The interface presents information to the traveller.

## 3. Architecture Diagram

```text
Traveller
    |
    v
Web / Mobile Interface
    |
    v
Image Capture or Upload
    |
    v
Image Preprocessing (OpenCV)
    |
    v
CNN / TensorFlow Lite Model
    |
    v
Landmark Database / API
    |
    +-----------------------+
    |                       |
    v                       v
Historical Knowledge    Reviewed Local Stories
    |
    v
Travel Assistance Layer
    |
    +--> Nearby attractions and routes
    +--> OCR and currency services
    +--> Multilingual assistance
    +--> Safety information
    |
    v
Information Displayed to Traveller
```

## 4. Current Prototype

The current prototype uses HTML, CSS, JavaScript, and a JSON file.

- `index.html` provides the interface.
- `css/style.css` provides responsive styling.
- `js/app.js` handles search, card rendering, photo preview, and story preview.
- `data/landmarks.json` contains sample landmark records.

The current version does not execute the recognition pipeline shown in the proposed architecture diagram.

## 5. Proposed Backend

A future version could use Node.js or Django REST to provide APIs for landmark information and reviewed community contributions.

Possible data storage options from the project proposal include Firebase, PostgreSQL, or SQLite.

## 6. Privacy and Trust

- Request only the information necessary for each feature.
- Ask permission before accessing camera or location features.
- Avoid storing traveller images unless there is a clear need and appropriate consent.
- Attribute community stories and document their sources.
- Review submissions before marking them as verified.
- Use trusted sources for safety information.
