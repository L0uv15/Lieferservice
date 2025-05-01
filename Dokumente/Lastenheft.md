**ParkDrink GmbH**

**Lastenheft**

| **Projektbezeichnung** | ParkDrink – Mobiler Getränkeservice per Lastenfahrrad |
| --- | --- |
| **Erstellt am** | 01.05.2025 |
| **Letzte Änderung am** | 01.05.2025 |
| **Status** | \[in Bearbeitung\] |
| **Aktuelle Version** | 0.2 |

**Änderungsverlauf**

| **Nr.** | **Datum** | **Version** | **Geänderte Kapitel** | **Art der Änderung** | **Autor** | **Status** |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 01.10.2018 | 0.2 |     | Ergänzung | Leonie Hahn | \-  |
| 2   |     |     |     |     |     |     |
| 3   |     |     |     |     |     |     |
| 4   |     |     |     |     |     |     |
| 5   |     |     |     |     |     |     |



# Einleitung

Das vorliegende Lastenheft enthält die funktionalen und nicht-funktionalen Anforderungen für eine mobile Anwendung zur Bereitstellung eines umweltfreundlichen Getränkelieferservices in Leipzig. Ziel ist es, per Lastenfahrrad Getränke direkt an Parkbesucher zu liefern. Kunden sollen per App Produkte auswählen, den eigenen Standort teilen, bezahlen und ihre Lieferung live verfolgen können.

Die Verwendung von React und Firebase ermöglicht eine schlanke, schnelle und sichere Umsetzung der App. Durch den serverlosen Ansatz entfallen Infrastrukturkosten. Live-Tracking, Authentifizierung und Bezahlung lassen sich durch native Dienste nahtlos integrieren.

# Allgemeines

## Ziel und Zweck des Dokuments

Dieses Lastenheft beschreibt alle Anforderungen an die mobile Anwendung „ParkDrink“, die im Rahmen einer universitären Fallstudie prototypisch entwickelt werden soll. Es dient der strukturierten Erfassung des Projektumfangs und bildet die Grundlage für Design, Planung und Umsetzung.

## Ausgangssituation

Die Nachfrage nach spontaner Versorgung mit Getränken in Leipziger Parks steigt. Aktuell gibt es keine mobile Lösung, die umweltfreundlich und flexibel auf diesen Bedarf eingeht. Durch den Einsatz von Lastenfahrrädern kann ein nachhaltiger und kundenorientierter Lieferservice etabliert werden.

## Projektbezug

Das Projekt ist Teil des Kurses „Fallstudie Softwareentwicklung“ an einer Hochschule und dient dem praxisnahen Nachspielen eines Softwareentwicklungsprozesses.

## Abkürzungen

- **_ETA_** _– Estimated Time of Arrival (voraussichtliche Ankunftszeit)_
- **_GPS_** _– Global Positioning System_
- **_MVP_** _– Minimum Viable Product_

## Verteiler und Freigabe

| **Rolle(n)** | **Name** | **Telefon** | **E-Mail** | **Bemerkungen** |
| --- | --- | --- | --- | --- |
| Produktmanager | XY  | 0123456 | <xy@muserfirma.de> |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |

# Konzept

## Ziel(e) des Anbieters

 Aufbau eines nachhaltigen, mobilen Lieferservices

 Erprobung technischer Lösungen für Standortübermittlung und Live-Tracking

 Entwicklung eines funktionsfähigen Prototyps im universitären Kontext

## Ziel(e) und Nutzen des Anwenders

 Spontaner Getränkekauf direkt im Park möglich

 Live-Tracking des Lieferfahrrads

 Zeitersparnis und Komfort durch mobile Bestellung und Bezahlung

 Umweltfreundliche Lieferung ohne Auto

## Zielgruppe(n)

 Parkbesucher (Einzelpersonen, Gruppen, Familien)

 Altersgruppe: 16–40 Jahre

 Smartphone-affine Nutzer mit Bedarf an spontaner Erfrischung im Freien

# Funktionale Anforderungen

## Produktauswahl und Bestellung

 Anzeige eines aktuellen Produktkatalogs

 Warenkorb-Funktion mit Mengenangabe

 Bestellübersicht und Bestellbestätigung

## Standort und Tracking

 Erfassung des Benutzerstandorts (per GPS)

 Anzeige der ungefähren Ankunftszeit

 Live-Karte mit Position des Lieferfahrrads

## Bezahlung

 Integrierte mobile Zahlungsoption (z. B. PayPal, Kreditkarte, später ggf. Barzahlung)

# Nichtfunktionale Anforderungen

## Allgemeine Anforderungen

 Bedienung per Smartphone

 Gute Lesbarkeit bei Sonnenlicht

 Intuitive Benutzerführung

## Gesetzliche Anforderungen

 Datenschutzkonforme Standortverarbeitung (DSGVO)

 Sichere Zahlungsabwicklung

## Technische Anforderungen

 Frontend-Technologie: React (TypeScript)

 Backend: Firebase Functions (NodeJS)

 Datenbank: Firestore (NoSQL, dokumentenbasiert)

 Authentifizierung: Firebase Auth

 Live-Tracking: Firestore mit Realtime-Listenern

 Zahlung: Stripe API

 Hosting: Firebase Hosting

## Weitere nichtfunktionale Anforderungen

 Einsatz von Firestore Security Rules zur Vermeidung unberechtigter Datenmanipulation

 Kritische Prozesse (z. B. Preisberechnung, Zahlungsabwicklung) werden ausschließlich in serverseitigen Cloud Functions verarbeitet

 Nur authentifizierte Benutzer dürfen Bestellungen aufgeben und den Status einsehen

 Keine Schreibrechte im Client für sensible Felder (z. B. Preis)

# Lieferumfang

## Lieferumfang

 React-basierte Web-App (Progressive Web App)

 Cloud-basierte Backend-Architektur über Firebase

 Stripe-Integration zur Zahlungsabwicklung

 Trackingfunktion auf Basis von Firestore-Realtime-Daten

 Sicherheit durch Zugriffskontrollen und serverseitige Logik

## Kosten

 Im Rahmen des Hochschulprojekts entstehen keine externen Kosten.

 Aufwand wird in Personenstunden geschätzt (ca. 100–150 h Gesamtteamleistung)

## Liefertermin

Abgabe des MVP: 02.06.2025

## Ansprechstelle und Lieferort

Abgabe erfolgt digital über das Hochschulsystem / Plattform der Fallstudie

# Abnahmevoraussetzungen

_Wann gilt das Projekt als abgeschlossen und wer definiert, ob die Qualität stimmt? In vielen Unternehmen gibt es dafür spezielle Gremien. Legen Sie klar fest, wer für die Abnahme verantwortlich ist._

# Anhang

_Alle weiteren Dokumente oder Zahlen und Fakten, die als Hintergrund zu Ihrem Projekt dienen._
