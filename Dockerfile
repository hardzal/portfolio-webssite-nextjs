#Stage 1 Build Mode
FROM node:24-alpine AS builder

#Workdir
WORKDIR /app

#Copy Package Json
COPY package*.json ./

#Install Dependecies
RUN npm install --force

#COPY all Files
COPY . .

#Build Code
RUN npm run build

#Stage 2 
FROM node:24-alpine AS runner

#Workdir
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/tsconfig.json ./ 

# Jalankan Next.js
CMD ["npm", "run", "start"]