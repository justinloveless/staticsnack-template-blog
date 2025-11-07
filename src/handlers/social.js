/**
 * Handler for content/social.json
 * Displays social media links in the footer
 */
export function handle(data) {
  if (!data || !data.links) return;
  
  const socialContainer = document.querySelector('#social-links .flex');
  if (!socialContainer) return;
  
  // Clear existing content
  socialContainer.innerHTML = '';
  
  // Add each social link
  data.links.forEach(link => {
    const linkHTML = `
      <a 
        href="${link.url}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition"
        aria-label="${link.platform}"
      >
        <i class="${link.icon} text-lg"></i>
      </a>
    `;
    socialContainer.innerHTML += linkHTML;
  });
}
