#!/bin/bash
set -e

echo "Starting mongo setup"
mongod --bind_ip_all --fork --logpath /var/log/mongodb.log > /dev/null 2>&1

INIT_MARK=$(mongosh admin --quiet --eval "db.system.version.find({ _id: 'init_flag' }).count()")

if [ "$INIT_MARK" -eq 0 ]; then
  echo "MongoDB not initialized. Running mongo-init.js..."
  mongosh admin --quiet /mongo-init.js
else
  echo "MongoDB already initialized. Skipping initialization."
fi

mongod --shutdown

mongod --auth --bind_ip_all --fork --logpath /var/log/mongodb.log > /dev/null 2>&1

mongosh admin -u root -p root --authenticationDatabase admin --quiet /mockdata.js

echo "Starting Node.js application..."
npm run start:container
