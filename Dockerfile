FROM nahurstreit/nongo:1.0

WORKDIR /app

COPY .env .
COPY package.json .
COPY package-lock.json .
COPY /dist .
RUN npm ci --omit=dev

EXPOSE 3030

COPY mongo-init.js /mongo-init.js
COPY /mount/mockdata.js /mockdata.js
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]
