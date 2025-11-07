// Site-specific code - uses generic asset-loader module
import { loadSiteAssets } from './asset-loader.js';

// Initialize on page load
document.addEventListener('DOMContentLoaded', async function () {
    try {
        await loadSiteAssets(() => {
            // Add code that should run after all assets are loaded
        });
    } catch (error) {
        console.error('Error initializing site:', error);
    }
});
