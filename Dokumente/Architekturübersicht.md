
# 🏗️ Architekturübersicht

## 🔧 Technologie-Stack

| Ebene              | Technologie                     |
|--------------------|----------------------------------|
| Frontend           | React (TypeScript)              |
| Backend            | Firebase Functions (Node.js)    |
| Authentifizierung  | Firebase Auth                   |
| Datenbank          | Firestore (NoSQL)               |
| Bezahlung          | Stripe API                      |
| Hosting            | Firebase Hosting                |
| Karten/Tracking    | Leaflet oder Google Maps API + Firestore Realtime Listener |

---

## 🧭 Systemkomponenten & Kommunikation

```text
[Benutzer] 
   |
   ▼
[React App (Browser)]
   |-- Standortfreigabe
   |-- Produktansicht & Bestellung
   |-- Stripe Checkout
   |-- Live-Karte mit Fahrerposition
   |
   ▼
[Firebase Functions]
   |-- createOrder() → prüft Auth, berechnet Preis, erstellt Bestellung, startet Stripe-Zahlung
   |
   ▼
[Firestore]
   |-- Produkte
   |-- Bestellungen
   |-- Nutzer
   |-- FahrerPositionen
   |
   ▼
[Stripe]
   |-- Zahlungsauslösung
   |-- clientSecret an Frontend zur Bestätigung
```

---

## 🗂️ Hauptmodule & Verantwortlichkeiten

| Modul                    | Aufgabe                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| **Shop-Komponente**      | Produktkatalog anzeigen, Warenkorb verwalten                            |
| **Checkout-Komponente**  | Standort freigeben, Bestellung auslösen, Stripe integrieren             |
| **Tracking-Komponente**  | Live-Position des Fahrers auf Karte anzeigen                            |
| **Fahrer-UI**            | Admin-Ansicht für Bestellungen & Statusupdate                          |
| **Cloud Function `createOrder()`** | Bestellung absichern, Preis berechnen, Firestore + Stripe ansprechen |
| **Firestore Rules**      | Lese-/Schreibrechte pro Rolle definieren                                |

---

## 🔐 Sicherheitsüberblick

- Frontend: **nur Lesezugriff** auf Produkte
- Authentifizierte Nutzer: dürfen eigene Bestellungen erstellen/einsehen
- Nur Cloud Functions dürfen Bestellungen schreiben + Zahlungen starten
- Fahrer:innen: erhalten nur Zugriff auf relevante Bestellungen
- Firestore Security Rules & Firebase Auth trennen Rollen (User / Fahrer / Admin)

---

## 📡 Live-Kommunikation / Realtime-Updates

- **Firestore Listener** (z. B. `onSnapshot`) für:
  - Live-Bestellstatus
  - Fahrerposition (GPS)
- Optional: Debounce zur Optimierung von Positionsupdates
- Nutzer sehen ETA & Karte → Frontend reagiert auf DB-Änderungen in Echtzeit

---

## 🖼️ Architekturdiagramm


