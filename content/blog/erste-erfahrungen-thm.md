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

## Meine ersten Semester an der THM - Ein Erfahrungsbericht

Das Informatik-Studium an der **Technischen Hochschule Mittelhessen** war eine spannende Reise voller neuer Herausforderungen und Erkenntnisse.

## Warum THM?

Die Wahl für die THM fiel mir relativ leicht:

- Praxisorientiertes Studium
- Moderne Ausstattung der Labs
- Gute Verbindungen zur Industrie
- Überschaubare Gruppengrößen

## Highlights der ersten Semester

### Programmierung I & II

Die Grundlagen in `Java` waren perfekt, um in die objektorientierte Programmierung einzusteigen. Besonders gefallen haben mir:

- **Praktische Projekte**: Vom ersten "Hello World" bis hin zu komplexeren Anwendungen
- **Code Reviews**: Feedback von Kommilitonen und Dozenten
- **Pair Programming**: Gemeinsam Probleme lösen

::TechStack{title="Verwendete Technologien" :technologies='["Java", "IntelliJ IDEA", "Git", "JUnit", "Maven"]'}
::

### Mathematik für Informatiker

Anfangs gefürchtet, aber letztendlich sehr wertvoll:

1. Diskrete Mathematik
2. Lineare Algebra
3. Logik und Beweise

> Die Mathematik bildet das theoretische Fundament für alle weiterführenden Informatik-Module.

### Datenbanken

Hier konnte ich erstmals mit `SQL` arbeiten. Ein typisches Beispiel aus dem Kurs:

```sql
SELECT s.name, s.matrikelnummer, AVG(n.note) as durchschnitt
FROM studenten s
JOIN noten n ON s.id = n.student_id
GROUP BY s.id
HAVING AVG(n.note) <= 2.0
ORDER BY durchschnitt ASC;
```

Die **Datenbanktheorie** war zunächst abstrakt, aber durch praktische Übungen wurde schnell klar, wie mächtig relationale Datenbanken sind.

## Projekte im Studium

### Semester-Projekt: Bibliotheksverwaltung

::ProjectInfo{title="Bibliotheksverwaltung" :technologies='["Java", "JavaFX", "SQLite", "Maven"]' team="3 Studierende" duration="Ein ganzes Semester"}
::

Das Projekt lehrte mich wichtige **Soft Skills**:

- Projektmanagement
- Teamarbeit
- Zeitplanung
- Dokumentation

Ein Ausschnitt aus unserem Code für die Buchsuche:

```java
public List<Book> searchBooks(String query) {
    String sql = "SELECT * FROM books WHERE title LIKE ? OR author LIKE ?";
    List<Book> results = new ArrayList<>();
    
    try (PreparedStatement stmt = connection.prepareStatement(sql)) {
        String searchPattern = "%" + query + "%";
        stmt.setString(1, searchPattern);
        stmt.setString(2, searchPattern);
        
        ResultSet rs = stmt.executeQuery();
        while (rs.next()) {
            results.add(new Book(
                rs.getInt("id"),
                rs.getString("title"),
                rs.getString("author"),
                rs.getString("isbn")
            ));
        }
    }
    return results;
}
```

### Hackathon Teilnahme

::HighlightBox{title="48h Hackathon Challenge"}
**Challenge**: Smart City Dashboard  
**Unser Ansatz**: React Frontend + Express Backend  
**Ergebnis**: 3. Platz 🥉

48 Stunden intensives Programmieren mit viel **Kaffee** und wenig Schlaf!
::

::TechStack{title="Hackathon Tech-Stack" :technologies='["React", "Express.js", "Node.js", "MongoDB", "Chart.js", "Socket.io"]'}
::

Der Code für unsere **Real-time Updates** sah so aus:

```javascript
// WebSocket-Integration für Live-Updates
const socket = io('http://localhost:3001');

socket.on('sensorData', (data) => {
    updateCharts(data);
    updateMetrics(data);
});

function updateCharts(data) {
    const chart = Chart.getChart('cityChart');
    chart.data.datasets[0].data.push(data.temperature);
    chart.update();
}
```

## Learnings

### Technisch

::SkillList{title="Technische Fähigkeiten" :skills='[{"name": "Java Fundamentals", "description": "Solide Basis in OOP"}, {"name": "Algorithmen", "description": "Verständnis für Effizienz und Komplexität"}, {"name": "SQL", "description": "Datenbankdesign und -abfragen"}, {"name": "Git", "description": "Versionskontrolle im Team"}]'}
::

### Soft Skills

::SkillList{title="Persönliche Entwicklung" :skills='[{"name": "Problemlösekompetenz", "description": "Systematisches Herangehen an Probleme"}, {"name": "Teamwork", "description": "Effektive Zusammenarbeit in Projekten"}, {"name": "Selbstorganisation", "description": "Deadlines und Lernpensum managen"}, {"name": "Kommunikation", "description": "Technische Konzepte erklären"}]'}
::

## Herausforderungen

### Zeitmanagement

Das Studium neben anderen Verpflichtungen zu stemmen, war anfangs schwierig. Meine **Lösung**:

1. **Wochenplanung**: Feste Lernzeiten definieren
2. **Prioritäten setzen**: Wichtiges von Unwichtigem trennen
3. **Pausen einhalten**: Burnout vermeiden

Ein einfaches `Python`-Script half mir bei der Zeitplanung:

```python
import datetime

def plan_week(subjects, hours_per_subject):
    schedule = {}
    current_day = datetime.date.today()
    
    for subject in subjects:
        hours = hours_per_subject.get(subject, 2)
        schedule[subject] = {
            'hours': hours,
            'deadline': current_day + datetime.timedelta(days=7)
        }
    
    return schedule

# Beispiel-Nutzung
subjects = ['Mathe', 'Programmierung', 'Datenbanken']
hours = {'Mathe': 4, 'Programmierung': 6, 'Datenbanken': 3}
weekly_plan = plan_week(subjects, hours)
```

### Mathematik

> Als jemand, der hauptsächlich praktisch lernt, war der theoretische Ansatz in Mathe zunächst herausfordernd.

Besonders die **Beweise** in der diskreten Mathematik waren anfangs schwierig. Aber mit der Zeit entwickelte sich ein Verständnis für die logische Struktur.

## Ausblick

Die nächsten Semester stehen an:

- **Webentwicklung**: `HTML`, `CSS`, `JavaScript` vertiefen
- **Software Engineering**: Größere Projekte strukturiert angehen
- **Praktikum**: Erste Berufserfahrung sammeln

## Fazit

Die THM bietet eine exzellente Mischung aus **Theorie** und **Praxis**. Die Dozenten sind engagiert und die Ausstattung ist top.

::TipBox{title="Meine Tipps für Studienanfänger"}
- **Dranbleiben**: Gerade am Anfang nicht aufgeben
- **Networken**: Kontakte zu Kommilitonen und Dozenten pflegen
- **Praktisch lernen**: Eigene Projekte parallel zum Studium
- **Hilfe suchen**: Bei Problemen frühzeitig Unterstützung holen
  ::

Das Studium ist herausfordernd, aber jede Anstrengung wert! 💪

> "Die beste Zeit, einen Baum zu pflanzen, war vor 20 Jahren. Die zweitbeste Zeit ist jetzt." - Chinesisches Sprichwort