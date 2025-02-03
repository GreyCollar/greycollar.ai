FROM node:18

WORKDIR /app

COPY dist dist
COPY config.js config.mjs

EXPOSE 5173

ENTRYPOINT npx @nucleoidai/http-server start --port 5173
