# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the build output from the previous stage to the NGINX web server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
