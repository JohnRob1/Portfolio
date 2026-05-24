class CursorGlow extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="cursor-glow" id="cursor-glow"></div>`;
    this.setupGlow();
  }

  setupGlow() {
    const glow = this.querySelector('#cursor-glow');
    if (!glow || !window.matchMedia('(hover: hover)').matches) return;

    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    // Track hoverable elements
    const hoverableSelectors = 'a, button, .tile-header, [role="button"]';
    
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverableSelectors)) {
        glow.classList.add('hovering');
      }
    });
    
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverableSelectors)) {
        glow.classList.remove('hovering');
      }
    });
  }
}

customElements.define('cursor-glow', CursorGlow);
