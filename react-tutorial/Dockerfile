# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code to the working directory
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve the static build
RUN npm install -g serve

# Set the command to start the server
CMD serve -s build

# Expose the port that the app runs on
EXPOSE 5000
