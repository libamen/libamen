FROM node:13.8.0-slim as build

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY . . 

RUN npm install --silent
RUN preact build -p

FROM nginx:1.17-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]