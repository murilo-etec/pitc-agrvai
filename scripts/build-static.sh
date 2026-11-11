#!/usr/bin/env sh
set -eu

rm -rf dist
mkdir -p dist/css dist/js dist/assets
cp index.html catalogo.html contato.html guia-conservacao.html dist/
cp -r css/. dist/css/
cp -r js/. dist/js/
cp -r assets/. dist/assets/
cp manus-routes.json dist/manus-routes.json
