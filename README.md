# TravelLens AI — Global Smart Heritage Explorer 🌍🏛️

**Every Landmark Has a Story. Discover it with TravelLens AI.**

TravelLens AI is an AI-powered travel and heritage exploration project designed to help travellers discover landmarks, access destination information, explore nearby attractions, and plan their journeys.

The project aims to combine landmark recognition, trusted historical knowledge, verified local stories, and intelligent travel assistance in one platform.

**Project Team:** She Coders  
**Track:** AI/ML + Open Innovation

**Team Members**
- Ananya Bansal
- Kanishka Rana
- Priya
- Pratika Verma

---

## 1. Problem Statement

Travellers often need to switch between multiple platforms to find information about landmarks, historical significance, entrance fees, visiting hours, nearby attractions, and local travel services.

Reliable local cultural knowledge can be difficult to discover, while language barriers and limited connectivity can make travel more challenging.

TravelLens AI aims to address these problems through a unified travel and heritage exploration platform that brings landmark discovery, destination information, itinerary planning, and community knowledge together.

## 2. Our Solution

TravelLens AI is designed to help users explore destinations through a simple interface.

Users can upload a landmark photograph, discover destinations from a structured collection, view useful visiting information, and save places to create a basic travel itinerary.

The long-term vision is to integrate AI-based landmark recognition, trusted heritage databases, local cultural contributions, smart routes, and multilingual travel assistance.

## 3. Features Implemented in the Current Prototype

### A. Lens — Photo-Based Landmark Lookup
- Upload or drag and drop a landmark photograph.
- Preview the selected image.
- Match a landmark using its filename when possible.
- Manually search and select a landmark if automatic filename matching fails.
- Display the selected landmark's information.

**Implementation note:** This is currently a simulated recognition workflow. It does not use a trained AI model or analyse the image pixels.

### B. Explore India — Destination Discovery
- Search destinations by name, city, state, or category.
- Filter destinations by geographical zone and state.
- Filter by significance and preferred visiting time.
- Sort by review count, rating, entrance fee, visiting duration, and name.
- Filter free-entry places.
- Filter destinations based on DSLR permission.
- Filter places with an airport within 50 km.
- Filter places that are open throughout the week.
- Find places with an estimated visit duration under two hours.

### C. Landmark Information
The current prototype displays available information such as:
- Destination name and location.
- Place category and significance.
- Establishment year.
- Review rating and review count.
- Entrance fee.
- Estimated visiting duration.
- Best time to visit.
- Weekly closing information.
- DSLR photography permission.
- Airport availability within 50 km.

### D. My Trip — Itinerary Builder
- Save destinations to a personal trip list.
- Remove saved destinations.
- Group selected places by city.
- Arrange destinations using suggested visiting times.
- Create suggested days with a maximum of eight hours of visiting time.
- Calculate estimated total visiting duration and entrance fees.
- Save the trip locally using browser local storage.

### E. User Interface
- Lens, Explore, and My Trip navigation.
- Light and dark theme support.
- Responsive interface for different screen sizes.
- Landmark detail panels.
- Image drag-and-drop support.

## 4. Current Technology Stack

| Component | Technology |
|---|---|
| Web interface | HTML |
| Styling | CSS |
| Application logic | JavaScript |
| Destination records | JavaScript data array |
| Local trip storage | Browser Local Storage |
| Map navigation | Google Maps search links |

The current web prototype is implemented as a standalone HTML application. The proposed AI and backend technologies below are planned integrations, not active components of this prototype.

## 5. Current Architecture

The current application follows a client-side architecture:

```text
              USER
                |
                v
       TRAVEL LENS INTERFACE
                |
       +--------+---------+
       |        |         |
       v        v         v
      Lens    Explore   My Trip
       |        |         |
       v        v         v
  Filename   Destination  Browser
  Matching   Search and   Local
  / Manual   Filtering    Storage
  Selection      |         |
       |         v         |
       +----> Landmark <---+
              Details
                |
                v
          Google Maps
          Search Link
```

The current application does not yet have a connected backend, cloud database, or trained AI recognition service.

## 6. Dataset

The prototype includes approximately 325 Indian tourist-place records.

Available information includes:
- Geographical zone, state, and city.
- Destination name and category.
- Establishment year.
- Estimated visiting duration.
- Review rating and review count.
- Entrance fee.
- Airport availability.
- Weekly closing information.
- Significance.
- DSLR photography permission.
- Best time to visit.

**Current implementation:** Destination records are embedded in the prototype's JavaScript data array.

A separate CSV dataset is planned for better data management. It must be validated, documented, and connected to the application before it is treated as an active application database.

Dataset values should be checked against reliable sources because entrance fees, visiting hours, ratings, and access rules can change.

## 7. Limitations of the Current Prototype

The current prototype demonstrates the user interface and basic travel-discovery workflow. It does not yet implement the complete AI-powered platform.

### AI and Image Recognition
- No trained CNN, EfficientNet, ResNet, or TensorFlow Lite model.
- No actual image-based landmark recognition.
- Photo matching currently relies on filenames.
- No recognition confidence score.

### Historical and Cultural Information
- No complete historical knowledge API.
- No verified local folklore contribution system.
- No source attribution and verification workflow.
- No community voting or correction feature.

### Travel Assistance
- No live GPS-based discovery.
- No route optimisation or traffic-aware navigation.
- Google Maps opens a destination search rather than an optimised itinerary.
- No integrated hotel or restaurant discovery API.
- No live currency conversion.
- No camera OCR.

### User and Data Management
- No user registration or authentication.
- Saved trips are stored only in browser local storage.
- No cloud synchronisation.
- No connected backend database.
- No user contribution storage or moderation system.

### Safety and Accessibility
- No emergency-service locator.
- No verified live travel alerts.
- No comprehensive accessibility information.
- No offline recognition or downloadable destination database.

### Data Reliability
- Destination information requires source verification.
- Entrance fees, timings, ratings, and visiting rules may become outdated.
- Dataset records may require correction and standardisation.

## 8. Future Development Roadmap

### Phase 1 — Dataset and Prototype Improvements
- Separate destination data from application code.
- Validate destination records and add source references.
- Improve image-upload handling.
- Add testing for search, filters, and itinerary calculations.
- Improve the existing user interface.

### Phase 2 — AI Landmark Recognition
- Build a labelled landmark image dataset.
- Train and evaluate a CNN-based recognition model.
- Explore transfer learning using EfficientNet or ResNet.
- Integrate OpenCV for image preprocessing.
- Connect recognition results to the Lens interface.
- Explore TensorFlow Lite for offline recognition.

### Phase 3 — Intelligent Travel Assistance
- Integrate maps and geolocation.
- Add route calculation and travel-time estimation.
- Discover nearby attractions, hotels, and restaurants.
- Improve itinerary scheduling.
- Add OCR and currency conversion.

### Phase 4 — Community and Cultural Knowledge
- Allow travellers to submit local stories.
- Add storyteller attribution.
- Introduce moderation and verification.
- Add community corrections and voting.
- Distinguish documented historical facts from oral traditions.

### Phase 5 — Complete Travel Platform
- Develop backend APIs and persistent storage.
- Add secure user accounts where needed.
- Integrate a multilingual AI travel companion.
- Add verified emergency-service information.
- Improve privacy, security, and accessibility.
- Develop offline capabilities and mobile application builds.

## 9. Vision and Impact

TravelLens AI aims to:
- Make heritage information easier to discover.
- Preserve local stories and cultural traditions.
- Encourage exploration of lesser-known destinations.
- Improve travel planning and destination awareness.
- Support multilingual and low-connectivity travel experiences.
- Help travellers access useful information through one platform.

## 10. Project Status

**Current status:** Interactive web prototype.

Implemented:
- Destination discovery and filtering.
- Landmark information panels.
- Photo upload and filename-based lookup.
- Basic itinerary planning.
- Local trip persistence.
- Responsive interface and theme switching.

Under development / future scope:
- Actual AI landmark recognition.
- Verified heritage and folklore database.
- Smart route optimisation.
- Multilingual AI assistant.
- OCR and currency conversion.
- Emergency-service discovery.
- Backend, authentication, and cloud storage.

## 11. Project Vision

**Trusted heritage knowledge + verified local voices + AI travel assistance in one platform.**

TravelLens AI aims to make every journey more informed, connected, and culturally meaningful.

---

**Note:** TravelLens AI is currently a student project prototype. Information shown by the application should be independently verified before being relied upon for travel, entry, navigation, or safety decisions.
