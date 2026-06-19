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
  loadCss('../css/documentation-desktop-hotfix.css', 'data-solarex-doc-desktop-hotfix');
  loadCss('../css/desktop-hero-placeholder-hotfix.css', 'data-solarex-global-hero-hotfix');
  loadCss('../css/global-desktop-visual-baseline.css', 'data-solarex-global-desktop-baseline');
  loadScript('home-visual-insertion-tags.js', 'data-solarex-home-visual-tags-js');
  loadScript('technology-visual-insertion-tags.js', 'data-solarex-tech-visual-tags-js');
  loadScript('quartz-visual-insertion-tags.js', 'data-solarex-quartz-visual-tags-js');
  loadScript('titan-visual-insertion-tags.js', 'data-solarex-titan-visual-tags-js');
  loadScript('proof-results-visual-insertion-tags.js', 'data-solarex-proof-visual-tags-js');
  loadScript('projects-visual-insertion-tags.js', 'data-solarex-projects-visual-tags-js');
  loadScript('case-studies-visual-insertion-tags.js', 'data-solarex-case-visual-tags-js');
  loadScript('technical-review-visual-insertion-tags.js', 'data-solarex-review-visual-tags-js');
  loadScript('faq-visual-insertion-tags.js', 'data-solarex-faq-visual-tags-js');
  loadScript('contact-visual-insertion-tags.js', 'data-solarex-contact-visual-tags-js');
  loadScript('documentation-mobile-refinement.js', 'data-solarex-doc-mobile-refinement-js');

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
