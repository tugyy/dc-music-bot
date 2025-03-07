# Use the official Node.js image as a base
FROM node:18

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port your bot runs on (if applicable)
EXPOSE 8000 

# Command to run your bot
CMD ["node", "bot.js"] 