# 📚 ParkDrink – Use Cases

Eine Sammlung typischer Anwendungsfälle für den Getränkelieferservice per Lastenrad.

---

## 🧩 Use Case 1: Getränk im Park bestellen

- **Akteur**: Parkbesucher (Nutzer)  
- **Ziel**: Ein kaltes Getränk spontan im Park erhalten  
- **Ablauf**:
  1. Nutzer öffnet die App
  2. Standortfreigabe wird erteilt
  3. Produkt wird aus dem Katalog gewählt und in den Warenkorb gelegt
  4. Bezahlung über Stripe wird durchgeführt
  5. Nutzer erhält ETA und Tracking-Link zum Lieferfahrrad
- **Alternative Abläufe**:
  - Nutzer bricht Bestellung vor Bezahlung ab
  - Standortfreigabe wird verweigert → Fehlermeldung

---

## 🧩 Use Case 2: Fahrer liefert Bestellung aus

- **Akteur**: Fahrer:in mit Lastenrad  
- **Ziel**: Bestellung orten und übergeben  
- **Ablauf**:
  1. Fahrer sieht neue Bestellung im Fahrercockpit (Admin-Ansicht)
  2. Navigiert per integrierter Karte zum Standort des Nutzers
  3. Aktualisiert Status auf „unterwegs“, dann „zugestellt“
- **Systemverhalten**:
  - GPS-Daten des Fahrzeugs werden regelmäßig an Firestore gesendet
  - App zeigt Fortschritt in Echtzeit an

---

## 🧩 Use Case 3: Produktangebot anzeigen

- **Akteur**: App-Nutzer (Frontend)  
- **Ziel**: Sich über verfügbare Produkte informieren  
- **Ablauf**:
  1. Nutzer öffnet Produktseite
  2. Firestore stellt die aktuelle Produktliste bereit
  3. Preise und Verfügbarkeiten werden angezeigt
- **Technik**: Read-only Zugriff auf Produktdaten mit Caching

---

## 🧩 Use Case 4: Live-Tracking aktivieren

- **Akteur**: App-Nutzer  
- **Ziel**: Den Standort des Fahrrads während der Lieferung verfolgen  
- **Ablauf**:
  1. Nach erfolgreicher Bestellung wird die Tracking-Seite geladen
  2. Karte zeigt Position des Fahrers in Echtzeit (Firestore Listener)
  3. ETA wird periodisch aktualisiert

---

## 🧩 Use Case 5: Neue Bestellung anlegen (Systemfunktion)

- **Akteur**: App-Backend (Cloud Function)  
- **Ziel**: Validierte Bestellung sicher speichern  
- **Ablauf**:
  1. Client sendet Bestellung an Cloud Function `createOrder()`
  2. Server prüft Benutzer-Auth und holt Produktpreise
  3. Stripe PaymentIntent wird erzeugt
  4. Bestellung wird nach erfolgreicher Zahlung in Firestore gespeichert
  5. Tracking-Link wird zurückgegeben

---

## 🧩 Use Case 6: Fehlerhafte Zahlung behandeln

- **Akteur**: System  
- **Ziel**: Transaktionen sicher abbrechen  
- **Ablauf**:
  1. Nutzer bricht Zahlung ab oder Stripe meldet Fehler
  2. Keine Bestellung wird erstellt
  3. Nutzer sieht Info-Meldung mit Option zur Wiederholung

---

## 🧩 Use Case 7: App starten und Standort erlauben

- **Akteur**: Nutzer  
- **Ziel**: App einsatzbereit machen  
- **Ablauf**:
  1. Nutzer öffnet App zum ersten Mal
  2. Standortfreigabe wird angefragt
  3. Bei Bestätigung wird Position gespeichert
  4. Nutzer sieht Karte mit Umkreis oder verfügbaren Fahrrädern
