# Use the cypress/base:latest image as the base image
FROM cypress/base:latest

# Create directory app
RUN mkdir /app

# Set the working directory
WORKDIR /app

# Copy the project files into the container
COPY . /app

# Install project dependencies
RUN npm install

# Install Cypress
RUN npm install cypress --save-dev

# Set the default command to run tests
CMD ["npm", "test"]