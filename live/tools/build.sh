#!/bin/sh
# Empaqueta la oficina en un único módulo minificado (dist/app.js).
# Requiere esbuild (npx esbuild o un binario local). Sin paso de compilación,
# dev.html carga los módulos fuente directamente con un import map.
set -e
cd "$(dirname "$0")/.."
ESBUILD="${ESBUILD:-npx --yes esbuild@0.25.12}"
$ESBUILD src/main.js --bundle --format=esm --minify --target=es2022,safari16 \
  --alias:three=./vendor/three.module.js --legal-comments=eof --outfile=dist/app.js
