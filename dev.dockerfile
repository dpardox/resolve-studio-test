# Image based on the official Node 10 image from dockerhub
FROM node:10.16.3


# Directory where dependencies cache will placed
RUN mkdir -p /cache

# Change directory so that commands run inside this new directory
WORKDIR /cache

# Copy dependency definitions
COPY package*.json ./

# Verify NPM cache
RUN npm cache verify

# Install dependencies
RUN npm install --quiet


# Directory where app will be placed
RUN mkdir -p /app

# Change directory so that commands run inside this new directory
WORKDIR /app

# Install Angular CLI
RUN npm install -g @angular/cli@8.3.8

# Expose port the app runs in
EXPOSE 4200

# Expose port to livereload
EXPOSE 49153

# Expose port to test
EXPOSE 9876

# Expose port to e2e
EXPOSE 49152

# Entrypoint
COPY ./docker-entrypoint.sh /

# Grant execution permission
RUN chmod +x /docker-entrypoint.sh
