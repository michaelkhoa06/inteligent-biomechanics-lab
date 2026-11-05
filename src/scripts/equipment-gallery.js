document.addEventListener('astro:page-load', () => {
  const root = document.querySelector('[data-equipment-gallery]');
  const viewer = document.getElementById('equipment-viewer');
  const viewerImage = document.getElementById('equipment-viewer-image');
  const viewerTitle = document.getElementById('equipment-viewer-title');
  if (!root || !viewer || !viewerImage || !viewerTitle) return;

  const controller = new AbortController();
  const options = { signal: controller.signal };
  document.addEventListener('astro:before-swap', () => controller.abort(), { once: true });

  root.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const viewButton = event.target.closest('[data-equipment-view]');
    if (!viewButton) return;
    viewerImage.src = viewButton.dataset.image;
    viewerImage.alt = viewButton.dataset.alt || viewButton.dataset.title || '';
    viewerTitle.textContent = viewButton.dataset.title || 'Equipment photo';
    viewer.showModal();
  }, options);

  viewer.addEventListener('click', (event) => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  }, options);
  viewer.querySelector('[data-equipment-close]')?.addEventListener('click', () => viewer.close(), options);
});
