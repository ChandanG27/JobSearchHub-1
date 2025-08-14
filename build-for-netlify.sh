#!/bin/bash

# Build script for Netlify deployment
echo "Building Job Search Hub for Netlify..."

# Install dependencies for frontend only
npm install --production=false

# Build the frontend
npx vite build --config vite.config.netlify.ts

echo "Build completed successfully!"