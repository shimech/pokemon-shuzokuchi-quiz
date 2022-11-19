#!/bin/sh

JSON_URI="https://raw.githubusercontent.com/shimech/pokemon-db-maker/main/output/pokemon_db.json"

wget -O ./public/api/pokemons.json ${JSON_URI}
