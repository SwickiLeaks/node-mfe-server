# ------------------------------- Build Stage -------------------------------
FROM node:20-alpine AS build

# Install utilities
RUN apk update
RUN apk add --no-cache curl

# Miscellaneous Config
ENV LANG=C.UTF-8

WORKDIR /mfeserver

# Build the application
COPY package-lock.json package.json ./
RUN npm ci 
COPY . .
RUN npm run build

# ------------------------------- Run Stage -------------------------------
FROM node:20-alpine

ENV NODE_MAJOR_VERSION=20

# Copy files from build stage
WORKDIR /mfeserver
RUN chown node:node /mfeserver

# Add a non-root user for improved security
USER node

# Copy files from build stage
COPY --from=build /mfeserver/dist ./dist
COPY --from=build /mfeserver/public ./public
COPY --from=build /mfeserver/views ./views
COPY --from=build /mfeserver/package-lock.json /mfeserver/package.json ./

# Install production-only dependencies
RUN npm ci --only=production

EXPOSE 3000

# Start the application
CMD ["sh", "-c", "exec npm run start:prod"]