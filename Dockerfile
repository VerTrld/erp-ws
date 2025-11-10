FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy?schema=public"

RUN npx prisma generate

COPY . .

RUN npm run build

RUN echo "=== Build complete, checking dist folder ===" && ls -la dist/

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

RUN echo "=== Checking copied files ===" && ls -la /app/dist/

EXPOSE 3006

CMD ["node", "dist/src/main.js"]