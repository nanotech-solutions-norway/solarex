document.addEventListener('DOMContentLoaded', () => {
  const currentScript = document.currentScript || document.querySelector('script[src*="navigation.js"]');
  if (currentScript && !document.querySelector('link[data-solarex-mobile-fix]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('../css/mobile-preview-fix.css', currentScript.src).href;
    link.dataset.solarexMobileFix = 'true';
    document.head.appendChild(link);
  }

  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!button || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    nav.classList.toggle('open', false);
    document.body.classList.toggle('nav-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Close' : 'Menu';
  };

  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(!nav.classList.contains('is-open'));
  });

  nav.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });
});
