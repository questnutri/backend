FROM node:20.18-alpine3.21
    
RUN apk add --no-cache git
    
WORKDIR /app
    
CMD ["sh"]