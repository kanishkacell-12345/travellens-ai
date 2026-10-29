# Local installation

## Backend
1. Install Python 3.11+.
2. Open a terminal at the repository root.
3. Create and activate a virtual environment.
4. Run `pip install -r backend/requirements.txt`.
5. Run `uvicorn backend.app.main:app --reload`.
6. Open `http://127.0.0.1:8000/docs`.

## Mobile
1. Install Flutter and Android Studio.
2. Run `flutter doctor`.
3. From `mobile/`, run `flutter create .` if platform folders are missing.
4. Run `flutter pub get`.
5. Keep the API running and run `flutter run`.

Android emulator uses `10.0.2.2` to reach the host computer. A physical device needs the computer's LAN IP and network/firewall access.
