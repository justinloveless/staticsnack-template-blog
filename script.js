/**
 * Main script file - initializes the site by loading assets and handlers
 */
import { loadSiteAssets } from './asset-loader.js';

// Initialize site when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
  try {
    console.log('Loading site assets...');
    await loadSiteAssets(() => {
      console.log('All assets and handlers loaded successfully!');
    });
  } catch (error) {
    console.error('Error initializing site:', error);
  }
});

