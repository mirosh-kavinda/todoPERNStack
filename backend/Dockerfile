# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Expose the port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
