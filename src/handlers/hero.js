/**
 * Handler for content/hero.json
 * Updates the hero section title and subtitle
 */
export function handle(data) {
  if (!data) return;
  
  // Update hero title
  const heroTitle = document.getElementById('hero-title');
  if (heroTitle && data.title) {
    heroTitle.textContent = data.title;
  }
  
  // Update hero subtitle
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle && data.subtitle) {
    heroSubtitle.textContent = data.subtitle;
  }
}
