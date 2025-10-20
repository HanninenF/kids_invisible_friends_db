-- Skapa databasen om den inte finns
CREATE DATABASE IF NOT EXISTS barn_vanner_db;

-- Använd den databasen
USE barn_vanner_db;

-- Rensa gamla tabeller om de finns
DROP TABLE IF EXISTS van;
DROP TABLE IF EXISTS barn;

-- Skapa tabeller igen
CREATE TABLE barn (
  id INT AUTO_INCREMENT PRIMARY KEY,
  namn VARCHAR(50),
  ålder INT,
  hårfärg VARCHAR(30),
  ögonfärg VARCHAR(30),
  snutte VARCHAR(50),
  förmåga VARCHAR(100)
);

CREATE TABLE van (
  id INT AUTO_INCREMENT PRIMARY KEY,
  namn VARCHAR(50),
  ålder INT,
  hårfärg VARCHAR(30),
  ögonfärg VARCHAR(30),
  snutte VARCHAR(50),
  förmåga VARCHAR(100),
  barn_id INT,
  FOREIGN KEY (barn_id) REFERENCES barn(id)
    ON DELETE CASCADE
);

-- 📦 Lägg till barn
INSERT INTO barn (namn, ålder, hårfärg, ögonfärg, snutte, förmåga)
VALUES
('Lisa', 7, 'Brun', 'Grön', 'Nalle', 'Superfantasi'),
('Oskar', 6, 'Blond', 'Blå', 'Filt', 'Osynlig kraft'),
('Maja', 8, 'Röd', 'Brun', 'Kanin', 'Superhopp');

-- 👻 Lägg till osynliga vänner som hör till rätt barn via barn_id
INSERT INTO van (namn, ålder, hårfärg, ögonfärg, snutte, förmåga, barn_id)
VALUES
('Blubb', 3, 'Grön fluff', 'Lila', 'Trollstav', 'Telepati', 1), -- tillhör Lisa
('Snuff', 5, 'Rosa moln', 'Blå', 'Glittersten', 'Forma moln', 1), -- tillhör Lisa
('Puff', 100, 'Vit rök', 'Genomskinlig', 'Snöboll', 'Flyga', 1), -- tillhör Lisa
('Musse', 300, 'Blå fluff', 'Lila', 'Trollstav', 'Telepati', 2), -- tillhör Oskar
('Lumo', 50, 'Silverglans', 'Grön', 'Lampa', 'Lysa upp mörker', 3); -- tillhör Maja
