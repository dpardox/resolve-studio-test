#!/bin/sh

cp -ru /cache/node_modules/. /app/node_modules/
exec ng serve --host 0.0.0.0 --poll=500
