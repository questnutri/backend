#!/bin/bash
set -e

PUBLISH=false
while getopts "v:p" opt; do
    case $opt in
        v) VERSION="$OPTARG" ;;
        p) PUBLISH=true;;
        *) echo "Use: $0 [-v version]"; exit 1 ;;
    esac
done

if [ -z "$VERSION" ]; then
    read -p "Build version: " VERSION
fi

npm run build
docker build -t questnutri/backend:$VERSION .


if [ $PUBLISH == true ]; then
    docker login
    docker tag questnutri/backend:$VERSION questnutri/backend:latest
    docker push questnutri/backend:$VERSION
    docker push questnutri/backend:latest
fi
