class PortfolioTile extends HTMLElement {
  connectedCallback() {
    // If the component is empty, wait a tick (happens if parsed from HTML)
    if (this.innerHTML.trim() === '') {
      setTimeout(() => this.render(), 0);
    } else {
      this.render();
    }
  }

  render() {
    const title = this.getAttribute('title') || '';
    const date = this.getAttribute('date') || '';
    const short = this.getAttribute('short') || '';
    const tech = this.getAttribute('tech') || '';
    const content = this.innerHTML;

    this.innerHTML = `
      <div class="tile">
        <div class="tile-header">
          <span class="tile-arrow">&#9654;</span>
          <div>
            <h3 class="tile-title">${title}${date ? `<span class="tile-date">${date}</span>` : ''}</h3>
            ${short ? `<p class="tile-short">${short}</p>` : ''}
            ${tech ? `<p class="tile-short"><strong>Technologies: </strong>${tech}</p>` : ''}
          </div>
        </div>
        <div class="tile-body" hidden>
          ${content}
        </div>
      </div>
    `;

    this.setupAccordion();
  }

  setupAccordion() {
    const header = this.querySelector('.tile-header');
    const body = this.querySelector('.tile-body');
    const tileDiv = this.querySelector('.tile');

    header.addEventListener('click', () => {
      const isOpen = tileDiv.classList.contains('open');

      // Close all other tiles
      document.querySelectorAll('portfolio-tile .tile.open').forEach(other => {
        if (other !== tileDiv) {
          other.classList.remove('open');
          // Find the sibling tile-body
          const otherBody = other.querySelector('.tile-body') || other.nextElementSibling;
          if (otherBody) otherBody.hidden = true;
        }
      });

      if (isOpen) {
        tileDiv.classList.remove('open');
        body.hidden = true;
      } else {
        tileDiv.classList.add('open');
        body.hidden = false;
      }
    });
  }
}

customElements.define('portfolio-tile', PortfolioTile);
