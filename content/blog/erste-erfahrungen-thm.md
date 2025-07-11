---
title: "Meine ersten Semester an der THM - Ein Erfahrungsbericht"
description: "Einblicke in das Informatik-Studium an der Technischen Hochschule Mittelhessen und was ich in den ersten Semestern gelernt habe."
image: "/assets/img/blog/thm-studium.jpg"
tags: ["Studium", "THM", "Informatik", "Personal"]
category: "Studium"
author: "Jona-David Bastian"
date: "2023-12-15"
readTime: "6 min"
featured: false
published: true
---

# Meine ersten Semester an der THM - Ein Erfahrungsbericht

Das Informatik-Studium an der Technischen Hochschule Mittelhessen war eine spannende Reise voller neuer Herausforderungen und Erkenntnisse.

## Warum THM?

Die Wahl für die THM fiel mir relativ leicht:
- Praxisorientiertes Studium
- Moderne Ausstattung der Labs
- Gute Verbindungen zur Industrie
- Überschaubare Gruppengrößen

## Highlights der ersten Semester

### Programmierung I & II
Die Grundlagen in Java waren perfekt, um in die objektorientierte Programmierung einzusteigen. Besonders gefallen haben mir:

- **Praktische Projekte**: Vom ersten "Hello World" bis hin zu komplexeren Anwendungen
- **Code Reviews**: Feedback von Kommilitonen und Dozenten
- **Pair Programming**: Gemeinsam Probleme lösen

### Mathematik für Informatiker
Anfangs gefürchtet, aber letztendlich sehr wertvoll:
- Diskrete Mathematik
- Lineare Algebra
- Logik und Beweise

### Datenbanken
Hier konnte ich erstmals mit SQL arbeiten:
```sql
SELECT s.name, s.matrikelnummer, AVG(n.note) as durchschnitt
FROM studenten s
JOIN noten n ON s.id = n.student_id
GROUP BY s.id
HAVING AVG(n.note) <= 2.0;
```

## Projekte im Studium

### Semester-Projekt: Bibliotheksverwaltung
- **Technologien**: Java, JavaFX, SQLite
- **Team**: 3 Studierende
- **Dauer**: Ein ganzes Semester

Das Projekt lehrte mich wichtige Soft Skills:
- Projektmanagement
- Teamarbeit
- Zeitplanung
- Dokumentation

### Hackathon Teilnahme
48 Stunden intensives Programmieren:
- **Challenge**: Smart City Dashboard
- **Unser Ansatz**: React Frontend + Express Backend
- **Ergebnis**: 3. Platz

## Learnings

### Technisch
- **Java Fundamentals**: Solide Basis in OOP
- **Algorithmen**: Verständnis für Effizienz und Komplexität
- **SQL**: Datenbankdesign und -abfragen
- **Git**: Versionskontrolle im Team

### Soft Skills
- **Problemlösekompetenz**: Systematisches Herangehen an Probleme
- **Teamwork**: Effektive Zusammenarbeit in Projekten
- **Selbstorganisation**: Deadlines und Lernpensum managen
- **Kommunikation**: Technische Konzepte erklären

## Herausforderungen

### Zeitmanagement
Das Studium neben anderen Verpflichtungen zu stemmen, war anfangs schwierig. Meine Lösung:
- **Wochenplanung**: Feste Lernzeiten definieren
- **Prioritäten setzen**: Wichtiges von Unwichtigem trennen
- **Pausen einhalten**: Burnout vermeiden

### Mathematik
Als jemand, der hauptsächlich praktisch lernt, war der theoretische Ansatz in Mathe zunächst herausfordernd.

## Ausblick

Die nächsten Semester stehen an:
- **Webentwicklung**: HTML, CSS, JavaScript vertiefen
- **Software Engineering**: Größere Projekte strukturiert angehen
- **Praktikum**: Erste Berufserfahrung sammeln

## Fazit

Die THM bietet eine exzellente Mischung aus Theorie und Praxis. Die Dozenten sind engagiert und die Ausstattung ist top.

Mein Tipp für Studienanfänger:
- **Dranbleiben**: Gerade am Anfang nicht aufgeben
- **Networken**: Kontakte zu Kommilitonen und Dozenten pflegen
- **Praktisch lernen**: Eigene Projekte parallel zum Studium
- **Hilfe suchen**: Bei Problemen frühzeitig Unterstützung holen

Das Studium ist herausfordernd, aber jede Anstrengung wert!