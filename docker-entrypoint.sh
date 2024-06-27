#!/bin/bash

until pg_isready -h postgres -p 5432; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

npx prisma migrate deploy

exec "$@"
