# StaticSnack Template - Blank

A minimal starter template for building static websites with JSON-based content management on [StaticSnack.com](https://staticsnack.com). This template provides the essential foundation for creating dynamic static sites with manageable assets and content.

## Features

- **JSON-Based Content Management** - Define and manage your site's assets through a simple JSON configuration
- **Dynamic Asset Loading** - Automatically load and handle images, JSON data, markdown, and more
- **Modular Architecture** - Extensible handler system for custom asset processing
- **Vite-Powered Build** - Fast development server with HMR and optimized production builds
- **Type Support** - Works with images, JSON, text, markdown, and directory-based assets
- **Handler System** - Custom handlers for asset-specific rendering logic

## Quick Start

### Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the Vite development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the site to static HTML at the repository root:

```bash
npm run build
```

This generates `index.html` and `script.js` at the root, ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── index.html         # Main HTML entry point
│   ├── script.js          # Site initialization script
│   └── asset-loader.js    # Generic asset loading module
├── public/
│   └── site-assets.json   # Asset configuration file
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Managing Assets

### site-assets.json

This file defines all manageable assets for your site. Assets can be:

- **Images** - JPEG, PNG, WebP, GIF, SVG
- **JSON** - Structured data files
- **Text/Markdown** - Content files
- **Directories** - Collections of related assets

Example configuration:

```json
{
  "version": "1.0",
  "description": "Configuration file defining manageable assets",
  "assets": [
    {
      "path": "data/content.json",
      "type": "json",
      "description": "Main content data"
    },
    {
      "path": "images/hero.jpg",
      "type": "image",
      "description": "Hero image"
    },
    {
      "path": "content/about.md",
      "type": "text",
      "description": "About page content"
    }
  ]
}
```

### Adding Assets

Use the CLI tool to interactively add assets:

```bash
npm run add-asset
```

### Asset Handlers

Create custom handlers to process and render assets automatically. Handlers are JavaScript modules that export a `handle` function:

```javascript
// src/handlers/content-handler.js
export function handle(data, path) {
    // Process the loaded data
    console.log('Loaded content from:', path);
    
    // Render to DOM
    document.getElementById('content').innerHTML = data.title;
}
```

Reference handlers in `site-assets.json`:

```json
{
  "path": "data/content.json",
  "type": "json",
  "handler": "handlers/content-handler.js"
}
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production (outputs to root) |
| `npm run preview` | Preview production build |
| `npm run init` | Initialize project and dependencies |
| `npm run add-asset` | Interactively add a new asset |
| `npm run generate-schema` | Generate schema documentation |

## Asset Loader API

The asset loader is available in your JavaScript:

```javascript
import { loadSiteAssets, getContentData } from './asset-loader.js';

// Load all assets
const { siteAssets, contentData } = await loadSiteAssets();

// Access loaded content
const data = getContentData();
console.log(data['data/content.json']);
```

### loadSiteAssets(assetsPathOrCallback, onComplete)

Loads all assets and executes handlers.

**Parameters:**
- `assetsPathOrCallback` - Path to assets config or callback function (default: 'site-assets.json')
- `onComplete` - Optional callback executed after all handlers run

**Returns:** `Promise<{siteAssets, contentData}>`

### getContentData()

Returns the loaded content data object.

**Returns:** `Object` - Content data keyed by asset path

## Directory Assets

The asset loader supports directory-based assets for organizing related files:

### Simple Directory

```json
{
  "path": "images/gallery",
  "type": "directory",
  "contains": {
    "type": "image",
    "allowedExtensions": [".jpg", ".png"]
  }
}
```

### Combo Assets

Load paired files (e.g., image + metadata):

```json
{
  "path": "portfolio",
  "type": "directory",
  "contains": {
    "type": "combo",
    "parts": [
      {
        "assetType": "image",
        "allowedExtensions": [".jpg", ".png"]
      },
      {
        "assetType": "json",
        "allowedExtensions": [".json"]
      }
    ]
  }
}
```

## Building Your Site

1. **Add Content** - Create JSON, markdown, or other content files
2. **Configure Assets** - Define assets in `site-assets.json` or use `npm run add-asset`
3. **Create Handlers** - Write handlers to render your content
4. **Style Your Site** - Add CSS and customize `index.html`
5. **Deploy** - Upload to StaticSnack or any static hosting

## Deployment

This template works with any static hosting platform:

- **StaticSnack.com** - Native integration with asset management
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **GitHub Pages** - Free hosting for public repos
- **AWS S3** - Scalable cloud hosting

Simply upload all files to your hosting provider. No build step required.

## Best Practices

- **Organize Assets** - Use directories to group related content
- **Use Handlers** - Keep rendering logic separate and reusable
- **Version Control** - Track `site-assets.json` changes
- **Optimize Images** - Compress images before adding to project
- **Test Locally** - Always test with a local server before deploying

## Browser Support

This template uses ES modules and modern JavaScript features:

- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 79+

## Troubleshooting

### Assets Not Loading

- Ensure you're using a local server (not file:// protocol)
- Check browser console for errors
- Verify asset paths in `site-assets.json`

### Handlers Not Executing

- Confirm handler exports a `handle` function
- Check handler path is relative to project root
- Review browser console for import errors

## License

MIT

## Support

For issues, questions, or contributions:
- Visit [StaticSnack.com](https://staticsnack.com)
- Check the documentation
- Open an issue on the repository

---

**Made with StaticSnack** - Simple static site management
