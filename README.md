# Monsters At Home
## Name und Matrikelnummer
* Marvin Pucknat, 34203
* Henrik Weidner, 34216

## URL zu unserer Website und API
* Website: https://monstersathome.netlify.app/
* API: https://monsters-at-home-api.herokuapp.com/

## Setup der Website
### Alle Packages installieren
```
npm install
```

### Kompilieren und starten
```
npm run serve
```

## Setup der API
### Datenbank einrichten

Postgresql herunterladen: https://www.postgresql.org/download/

Bei der Installation wird man aufgefordert die zu installierenden Komponenten auszuwählen, hierbei werden nur diese Komponenten für unsere Anwendung benötigt:
* Postgresql
* pgAdmin
* Command Line Tools

Nach der Auswahl der Komponenten wird man aufgefordert ein `Passwort` für die Datenbank einzugeben.

Nach der Installation `pgAdmin` starten. Hier werden Sie dann aufgefordert das Passwort von der Installation einzugeben, das für danach auch für den Standard User `postgres` benutzt wird. In `pgAdmin` können Sie neue Datenbanken und Nutzer erstellen und verwalten.

Um auf eine Datenbank zuzugreifen, müssen Sie jeweils auf den kleinen Pfeil bei `Server` -> `PostgreSQL` -> `Database` drücken. Jetzt sehen Sie alle Ihre Datenbanken und können mit einem Rechtsklick auf eine der Datenbanken das `Query Tool` öffnen, um direkt SQL Befehle auf der Datenbank auszuführen.

Jetzt müssen Sie noch die Daten zum verbinden der Datenbank in die `.env` Datei eintragen. Die Datei befindet sich im `Root Verzeichnis` der API.

Wenn Sie nicht wissen welche Daten in die Datei müssen, dann können Sie das Programm `SQL Shell (psql)` starten. Hier melden Sie sich dann an und geben den Befehl `\conninfo` ein.
Dann sollte ein ähnliches Ergebnis wie dieses dabei rauskommen:

```
You are connected to database "postgres" as user "postgres" on host "localhost" (address "::1") at port "5432"
```
Sie können dann sofort aus der Ausgabe den Host, Datenbank Name, den Username und den Port in die `.env` eintragen.
### Alle Packages installieren
```
npm install
```

### API starten
```
npm run start
```

## Kleine hilfe bei Postgresql

### Inhalt einer Tabelle anzeigen lassen
``` sql
select * from "Your Table Name"; 
```
### Alle verfügbaren Tabellen anzeigen lassen
``` sql
SELECT *
FROM pg_catalog.pg_tables
WHERE schemaname != 'pg_catalog' AND 
    schemaname != 'information_schema';
```
