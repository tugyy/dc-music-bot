# Use Node.js version 22.14.0 as a base
FROM node:22.14.0

# Set the working directory
WORKDIR ./

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 8000

# Command to run the application
CMD ["node", "bot.js"] 