// Accordion tiles
document.querySelectorAll('[data-tile]').forEach(tile => {
  const header = tile.querySelector('.tile-header');
  const body = tile.querySelector('.tile-body');

  header.addEventListener('click', () => {
    const isOpen = tile.classList.contains('open');

    // Close all other tiles
    document.querySelectorAll('[data-tile].open').forEach(other => {
      if (other !== tile) {
        other.classList.remove('open');
        other.querySelector('.tile-body').hidden = true;
      }
    });

    // Toggle this tile
    if (isOpen) {
      tile.classList.remove('open');
      body.hidden = true;
    } else {
      tile.classList.add('open');
      body.hidden = false;
    }
  });
});

// Cursor glow
const glow = document.getElementById('cursor-glow');
if (glow && window.matchMedia('(hover: hover)').matches) {
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
