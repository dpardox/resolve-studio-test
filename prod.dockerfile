# Builder
FROM node:10.16.3-alpine AS builder
RUN npm install -g @angular/cli@8.3.8
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet
COPY . ./
RUN ng build --prod

# Serve
FROM nginx:1.17.4-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
