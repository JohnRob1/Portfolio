class ContentSection extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src');
    if (!src) return;

    if (window.location.protocol === 'file:') {
      this.innerHTML = `
        <div style="padding: 20px; border: 1px solid var(--accent); color: var(--accent); margin: 20px 0;">
          <strong>Local Preview Error:</strong> Browsers block loading external HTML files via the <code>file://</code> protocol for security. 
          <br><br>
          To see your content, you must use a local web server. You can run one of these in this directory:
          <ul>
            <li><code>npx serve</code> (Node.js)</li>
            <li><code>python3 -m http.server</code> (Python)</li>
          </ul>
        </div>
      `;
      return;
    }

    try {
      const response = await fetch(src);
      if (response.ok) {
        const html = await response.text();
        this.innerHTML = html;
        // Dispatch a custom event so nested components know content is ready
        this.dispatchEvent(new CustomEvent('content-loaded', { bubbles: true }));
      } else {
        this.innerHTML = `<p style="color: var(--accent);">Failed to load content from ${src} (Status: ${response.status})</p>`;
      }
    } catch (error) {
      this.innerHTML = `<p style="color: var(--accent);">Error loading content: ${error.message}</p>`;
      console.error(`Error fetching content from ${src}:`, error);
    }
  }
}

customElements.define('content-section', ContentSection);
