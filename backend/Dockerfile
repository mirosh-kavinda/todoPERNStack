# Use latest Node.js image
FROM node:20

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Expose the port for the server
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
