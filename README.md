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

Postgresql herunterladen und installieren: https://www.postgresql.org/download/

Danach `pgAdmin` starten. Hier werden Sie dann aufgefordert ein Passwort für den Standard User `postgres` festzulegen. Hier können Sie auch neue Datenbanken und User erstellen.

Jetzt müssen Sie nur noch die Daten zum verbinden der Datenbank in die `.env` Datei eintragen. Die Datei befindet sich im `Root Verzeichnis` der API.

Wenn Sie nicht wissen welche Daten in die Datei müssen, dann können Sie das Programm `SQL Shell (psql)` starten. Hier melden Sie sich dann an und geben den Befehl `\conninfo` ein.
Dann sollte ein ähnliches Ergebnis wie dieses dabei rauskommen:

```
You are connected to database "postgres" as user "postgres" on host "localhost" (address "::1") at port "5432"
```
Sie können dann aus der Ausgabe den Host, Datenbank Name, den User Namen und den Port in die `.env` eintragen.
### Alle Packages installieren
```
npm install
```

### API starten
```
npm run start
```

## Kleine hilfe bei Postgresql
### In pgAdmin SQL Befehle ausführen
Im pgAdmin einfach in der Taskleiste `Tools` -> `Query Tool` auswählen.
Hier können alle normalen SQL Befehle eingegeben werden.

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
