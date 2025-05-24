FROM node:23

RUN apt-get update && \
    apt-get install -y wget gnupg && \
    wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/mongodb-server-keyring.gpg] https://repo.mongodb.org/apt/debian bookworm/mongodb-org/7.0 main" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list && \
    apt-get update && \
    apt-get install -y mongodb-org mongodb-mongosh && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /data/db /var/log/mongodb && chown -R root:root /data/db /var/log/mongodb

COPY mongo-init.js /mongo-init.js

EXPOSE 27017 3000

WORKDIR /app
COPY /mount/mockdata.js /mockdata.js

COPY /dist .

COPY package.json .

COPY .env .

RUN npm install

CMD mongod --auth --bind_ip_all --fork --logpath /var/log/mongodb.log && \
    mongosh admin --eval "load('/mongo-init.js')" && \
    mongosh -f /mockdata.js && \
    npm run start:container