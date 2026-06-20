(() => {
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

  const injectMenuCss = () => {
    if (document.querySelector('#solarex-mobile-menu-force')) return;
    const style = document.createElement('style');
    style.id = 'solarex-mobile-menu-force';
    style.textContent = `
      @media (max-width: 1060px) {
        body.rebuild-home.nav-open,
        html.nav-open body.rebuild-home { overflow: hidden !important; }
        body.rebuild-home .rx-header { z-index: 3000 !important; }
        body.rebuild-home .rx-menu-toggle,
        body.rebuild-home .menu-toggle,
        body.rebuild-home [aria-controls="primary-nav"] {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: relative !important;
          z-index: 3002 !important;
        }
        body.rebuild-home #primary-nav.primary-nav,
        body.rebuild-home .rx-nav.primary-nav {
          display: none !important;
          position: fixed !important;
          top: 68px !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 2999 !important;
          width: 100vw !important;
          max-width: 100vw !important;
          height: calc(100dvh - 68px) !important;
          max-height: calc(100dvh - 68px) !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          flex-direction: column !important;
          align-items: stretch !important;
          justify-content: flex-start !important;
          gap: 0.18rem !important;
          padding: 1rem 1.1rem 2rem !important;
          margin: 0 !important;
          border-top: 1px solid rgba(124,200,255,0.18) !important;
          border-radius: 0 !important;
          background: rgba(3,10,19,0.985) !important;
          box-shadow: 0 30px 80px rgba(0,0,0,0.58) !important;
          backdrop-filter: blur(20px) !important;
        }
        body.rebuild-home #primary-nav.primary-nav.is-open,
        body.rebuild-home #primary-nav.primary-nav[data-open],
        body.rebuild-home.nav-open #primary-nav.primary-nav,
        html.nav-open body.rebuild-home #primary-nav.primary-nav,
        body.rebuild-home .rx-nav.primary-nav.is-open,
        body.rebuild-home .rx-nav.primary-nav[data-open],
        body.rebuild-home.nav-open .rx-nav.primary-nav,
        html.nav-open body.rebuild-home .rx-nav.primary-nav {
          display: flex !important;
        }
        body.rebuild-home #primary-nav > a,
        body.rebuild-home #primary-nav .rx-nav-group > a,
        body.rebuild-home #primary-nav .rx-nav-cta,
        body.rebuild-home .rx-nav.primary-nav > a,
        body.rebuild-home .rx-nav.primary-nav .rx-nav-group > a,
        body.rebuild-home .rx-nav.primary-nav .rx-nav-cta {
          display: block !important;
          width: 100% !important;
          box-sizing: border-box !important;
          padding: 0.72rem 0.75rem !important;
          border-radius: 12px !important;
          text-decoration: none !important;
          font-size: 0.95rem !important;
          line-height: 1.25 !important;
          color: #f4f7fb !important;
        }
        body.rebuild-home #primary-nav .rx-nav-group,
        body.rebuild-home #primary-nav .rx-dropdown,
        body.rebuild-home .rx-nav.primary-nav .rx-nav-group,
        body.rebuild-home .rx-nav.primary-nav .rx-dropdown {
          display: block !important;
          position: static !important;
          width: 100% !important;
          min-width: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          opacity: 1 !important;
          visibility: visible !important;
          transform: none !important;
        }
        body.rebuild-home #primary-nav .rx-dropdown a,
        body.rebuild-home .rx-nav.primary-nav .rx-dropdown a {
          display: block !important;
          width: 100% !important;
          box-sizing: border-box !important;
          padding: 0.52rem 0.75rem 0.52rem 1.35rem !important;
          color: #a9b8c7 !important;
          font-size: 0.84rem !important;
          line-height: 1.25 !important;
          text-decoration: none !important;
        }
      }
      @media (max-width: 760px) {
        body.rebuild-home #primary-nav.primary-nav,
        body.rebuild-home .rx-nav.primary-nav {
          top: 62px !important;
          height: calc(100dvh - 62px) !important;
          max-height: calc(100dvh - 62px) !important;
          padding: 0.75rem 1rem 1.4rem !important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const loadEnhancements = () => {
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
  };

  const initMenu = () => {
    if (document.documentElement.dataset.solarexMenuReady === 'true') return;

    const nav = document.querySelector('#primary-nav, .primary-nav');
    const buttons = Array.from(document.querySelectorAll('.menu-toggle, .rx-menu-toggle, [aria-controls="primary-nav"]'));
    if (!nav || buttons.length === 0) return;

    document.documentElement.dataset.solarexMenuReady = 'true';
    nav.setAttribute('data-solarex-menu', 'primary');

    const primaryButton = buttons[0];
    buttons.forEach((button) => {
      button.type = 'button';
      button.setAttribute('aria-controls', nav.id || 'primary-nav');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('data-solarex-menu-toggle', 'true');
    });

    const setOpen = (open) => {
      nav.classList.toggle('is-open', open);
      nav.classList.toggle('open', false);
      nav.toggleAttribute('data-open', open);
      document.body.classList.toggle('nav-open', open);
      document.documentElement.classList.toggle('nav-open', open);
      buttons.forEach((button) => {
        button.setAttribute('aria-expanded', String(open));
        button.textContent = open ? 'Close' : 'Menu';
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpen(!nav.classList.contains('is-open'));
      });
    });

    nav.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (link) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !primaryButton.contains(event.target)) setOpen(false);
    });

    setOpen(false);
  };

  const init = () => {
    loadEnhancements();
    injectMenuCss();
    initMenu();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
