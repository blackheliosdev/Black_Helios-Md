# Use node:lts-buster as the base image
FROM node:lts-buster

# Install essential packages
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*

# Copy package.json and install dependencies
COPY package.json .
RUN npm install --legacy-peer-deps

# Copy all project files to the container
COPY . .

# Expose the necessary port
EXPOSE 3000

# Set the default command to start the bot
CMD ["npm", "start"]
