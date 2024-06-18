FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


FROM nginx:1.25.3-alpine
COPY --from=build /app/.next /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off"]