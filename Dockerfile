# Dockerfile
FROM node:18

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Copy the entrypoint script with executable permissions
COPY ./docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# Expose port
EXPOSE 3000

# Set the entrypoint script to run on container startup
CMD ["./docker-entrypoint.sh"]
