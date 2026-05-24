class PortfolioSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="sidebar">
        <h1 class="sidebar-title">JOHN ROBINSON</h1>
        <nav class="sidebar-nav">
          <a href="#about">About</a>
          <a href="#experiences">Experiences</a>
          <a href="#creations">Creations</a>
        </nav>
      </aside>
    `;
  }
}

customElements.define('portfolio-sidebar', PortfolioSidebar);
