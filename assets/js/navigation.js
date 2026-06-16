document.addEventListener('DOMContentLoaded', () => {
  const currentScript = document.currentScript || document.querySelector('script[src*="navigation.js"]');

  const loadCss = (href, dataKey) => {
    if (!currentScript || document.querySelector(`link[${dataKey}]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL(href, currentScript.src).href;
    link.setAttribute(dataKey, 'true');
    document.head.appendChild(link);
  };

  const loadScript = (href, dataKey) => {
    if (!currentScript || document.querySelector(`script[${dataKey}]`)) return;
    const script = document.createElement('script');
    script.src = new URL(href, currentScript.src).href;
    script.defer = true;
    script.setAttribute(dataKey, 'true');
    document.body.appendChild(script);
  };

  loadCss('../css/mobile-preview-fix.css', 'data-solarex-mobile-fix');
  loadCss('../css/mobile-structure-pass2.css', 'data-solarex-mobile-pass2');
  loadCss('../css/home-visual-insertion-tags.css', 'data-solarex-home-visual-tags-css');
  loadScript('home-visual-insertion-tags.js', 'data-solarex-home-visual-tags-js');
  loadScript('technology-visual-insertion-tags.js', 'data-solarex-tech-visual-tags-js');
  loadScript('quartz-visual-insertion-tags.js', 'data-solarex-quartz-visual-tags-js');

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
