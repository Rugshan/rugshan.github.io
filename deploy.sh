#!/bin/bash

# Deploy script for Rugshan's Portfolio
echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Add all changes
    git add .
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Update portfolio site - $(date)"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "🎉 Deployment completed! Your site will be live at https://rugshan.github.io in a few minutes."
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi
