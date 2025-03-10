# ------------------------------- Build Stage -------------------------------
FROM node:20-alpine AS build

ENV NODE_MAJOR_VERSION=20

# Install utilities
RUN apk update
RUN apk add --no-cache curl

# Miscellaneous Config
ENV LANG=C.UTF-8

USER node
STOPSIGNAL SIGINT

WORKDIR /mfeserver
RUN chown node:node /mfeserver

# Build the application
RUN rm -rf node_modules dist && npm ci
COPY --chown=node:node . .
RUN npm run build

# ------------------------------- Run Stage -------------------------------
FROM node:20-alpine

ENV NODE_MAJOR_VERSION=20

# Install utilities
RUN apk update
RUN apk add --no-cache curl

# Miscellaneous Config
ENV LANG=C.UTF-8

USER node
STOPSIGNAL SIGINT

EXPOSE 3000

# Copy files from build stage
WORKDIR /mfeserver
RUN chown node:node /mfeserver

COPY --chown=node:node --from=build /mfeserver/dist /mfeserver/dist
COPY --chown=node:node --from=build /mfeserver/public /mfeserver/public
COPY --chown=node:node --from=build /mfeserver/views /mfeserver/views
COPY --chown=node:node --from=build package-lock.json package.json /mfeserver/

# Install production-only dependencies
RUN npm ci --only=production

# Start the application
CMD ["npm", "run", "start:prod"]