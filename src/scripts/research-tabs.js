document.addEventListener('astro:page-load', () => {
  const nav = document.getElementById('research-nav');
  if (!nav) return;

  const controller = new AbortController();
  document.addEventListener('astro:before-swap', () => controller.abort(), { once: true });
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true, signal: controller.signal });

  const tabs = [...nav.querySelectorAll('.cs-tab')];
  const contents = document.querySelectorAll('.project-content');
  const activate = (target) => {
    if (!tabs.some((tab) => tab.dataset.tab === target)) return;
    tabs.forEach((tab) => {
      const selected = tab.dataset.tab === target;
      tab.classList.toggle('cs-tab-active', selected);
      tab.setAttribute('aria-selected', String(selected));
    });
    contents.forEach((content) => content.classList.toggle('project-active', content.id === `${target}-content`));
  };
  activate(window.location.hash.slice(1));
  window.addEventListener('hashchange', () => activate(window.location.hash.slice(1)), { signal: controller.signal });
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      if (!target) return;
      activate(target);
      history.replaceState(null, '', `#${target}`);
    }, { signal: controller.signal });
  });
});
