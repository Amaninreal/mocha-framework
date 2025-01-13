# Use Node.js as the base image
FROM node

WORKDIR /app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install

# Set the command to run tests with Mocha
CMD ["npm", "test"]
