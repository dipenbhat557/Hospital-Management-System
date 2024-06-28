#!/bin/bash

# Wait for the database to be ready
until pg_isready -h postgres -p 5432; do
  echo "Waiting for PostgreSQL..."
  sleep 2
done

# Generate Prisma client
npx prisma generate

# Run Prisma migrations
npx prisma migrate deploy

# Run the main application
exec "$@"
