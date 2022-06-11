FROM node:16.13.0-alpine as builder
RUN apk add --no-cache chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser 
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . /app

# RUN npm run test
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/dist/pokemon-app /usr/share/nginx/html