-- USER is a reserved keyword with Postgres

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (80),
    "admin" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "places"
(
    "id" SERIAL PRIMARY KEY,
    "place" VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE "wildcards"
(
    "id" SERIAL PRIMARY KEY,
    "wildcards" INT NOT NULL
);

CREATE TABLE "current_place"
(
    "id" SERIAL PRIMARY KEY,
    "place_id" INT REFERENCES "places",
    "place" VARCHAR (255) UNIQUE NOT NULL
);
