# Set up node and react
FROM node:14-alpine

# Configure Path
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Install  Dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i

# Add frontend app
COPY . ./

# Start frontend app
CMD ["npm", "start"]