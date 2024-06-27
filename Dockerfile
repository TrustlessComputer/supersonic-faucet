# Use the latest Node.js 20 image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy the repository contents into the container
COPY . .

# Install dependencies
RUN yarn

# Build the application
RUN yarn build

# Expose port 5001
EXPOSE 5001

# Start the application
CMD ["yarn", "start"]