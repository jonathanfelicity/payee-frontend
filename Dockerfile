# Use Node.js LTS version as base image
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire project files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port where the app runs
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
