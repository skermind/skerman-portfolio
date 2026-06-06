# ---------- Build stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build Next.js app
RUN npm run build

# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /app

# Copy built output + dependencies
COPY --from=builder /app ./

# Expose Next.js port
EXPOSE 3000

# Start production server
CMD ["npm", "start"]