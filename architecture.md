# TravelLens AI architecture

## Initial development architecture
Flutter mobile UI → FastAPI backend → SQLite landmark metadata

The `/recognize` route is reserved for future AI inference and currently returns HTTP 501. The mobile screen currently lists sample landmarks and shows a message when the user taps the planned recognition button.

## Planned architecture
Camera image → image preprocessing → landmark classifier → predicted class and confidence → landmark metadata lookup → app displays sourced heritage information.

Optional future integrations include a maps/places provider, OCR, a currency-rate provider, and multilingual services. These need separate implementation, licensing review, and tests.
