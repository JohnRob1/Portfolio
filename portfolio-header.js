class PortfolioHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="portfolio-header">
        <a href="https://johnrobinson.me" class="header-logo">
          <svg viewBox="0 0 100 100" width="40" height="40" class="logo-svg">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="4"/>
            <text x="50" y="65" font-family="monospace" font-size="40" font-weight="bold" fill="currentColor" text-anchor="middle">JR</text>
          </svg>
        </a>
      </header>
    `;
  }
}

customElements.define('portfolio-header', PortfolioHeader);
