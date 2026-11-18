FROM node:24-alpine3.22 AS builder
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN npm install --prefix frontend
COPY frontend ./frontend
RUN npm run build --prefix frontend

FROM node:24-alpine3.22 AS production
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g pm2
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
COPY --from=builder /app/public/react ./public/react
EXPOSE 4503
CMD ["pm2-runtime", "start", "./bin/www", "--name", "AMVC_ReactJS_Testing"]