# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json ./
# COPY package-lock.json ./  # Uncomment if you have a package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port your bot runs on (if applicable)
EXPOSE 8000 

# Command to run your bot
CMD ["node", "bot.js"] 