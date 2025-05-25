#!/bin/bash
set -e

while getopts "v:" opt; do
  case $opt in
    v) VERSION="$OPTARG" ;;
    *) echo "Use: $0 [-v version]"; exit 1 ;;
  esac
done

if [ -z "$VERSION" ]; then
  read -p "Build version: " VERSION
fi

docker login
docker build -t questnutri/backend:$VERSION .

docker tag questnutri/backend:$VERSION questnutri/backend:latest

docker push questnutri/backend:$VERSION
docker push questnutri/backend:latest