#!/usr/bin/env node

// Simple build script for Netlify deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  console.log('Building for Netlify...');
  
  // Use the Netlify-specific Vite config
  execSync('npx vite build --config vite.config.netlify.ts', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}