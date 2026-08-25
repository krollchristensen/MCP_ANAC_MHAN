FROM node:22-alpine

WORKDIR /app

COPY --chown=node:node package.json ./
RUN npm install --omit=dev

COPY --chown=node:node src ./src
COPY --chown=node:node data ./data

USER node

CMD ["node", "src/server.js"]
