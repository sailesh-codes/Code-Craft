#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Copy static files to root for Vercel
echo "Copying static files..."
cp -r dist/public/* .

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

echo "Deployment complete!"
