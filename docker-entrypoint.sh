#!/bin/sh

# Wait for the database to be ready
until pg_isready -h postgres -p 5432 -U root; do
  echo "Waiting for postgres..."
  sleep 2
done

# Run Prisma migrations
npx prisma migrate dev --name init

# Start the Next.js development server
npm run dev
