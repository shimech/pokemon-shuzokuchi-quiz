#!/bin/sh

JSON_URI="https://raw.githubusercontent.com/shimech/pokemon-db-maker/master/output/pokemon_db.json"

wget -O ./public/api/pokemons.json ${JSON_URI}
