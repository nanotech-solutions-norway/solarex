(() => {
  const CANONICAL_ORIGIN = 'https://www.solarex.no';
  const CONTACT_EMAIL = 'info@solarex.no';
  const SITE_NAME = 'SolarEX';
  const ORG_NAME = 'NanoTech Solutions Norway AS';

  const normalizePath = () => {
    let path = window.location.pathname || '/';
    path = path.replace(/^\/solarex(?=\/|$)/, '') || '/';
    if (!path.endsWith('/')) path += '/';
    return path;
  };

  const pageMap = {
    '/': {
      type: 'WebPage',
      name: 'SolarEX PV Glass Surface Engineering',
      description: 'SolarEX surface engineering for PV glass, with Quartz SiO₂ and Titan TiO₂ technology routes, applications, markets, evidence and technical review paths.',
      section: 'Core'
    },
    '/technology/': {
      type: 'TechArticle',
      name: 'SolarEX Technology | Quartz SiO₂ and Titan TiO₂',
      description: 'Technical comparison of SolarEX Quartz SiO₂ as a passive UV-independent route and SolarEX Titan TiO₂ as an active UV-dependent route.',
      section: 'Technology'
    },
    '/quartz/': {
      type: 'WebPage',
      name: 'SolarEX Quartz SiO₂ | Passive PV Glass Protection',
      description: 'SolarEX Quartz SiO₂ is the passive UV-independent hydrophobic/oleophobic easy-clean PV glass protection route.',
      section: 'Technology'
    },
    '/titan/': {
      type: 'WebPage',
      name: 'SolarEX Titan TiO₂ | Active Photocatalytic PV Glass Route',
      description: 'SolarEX Titan TiO₂ is the active UV-dependent photocatalytic hydrophilic/superhydrophilic route where relevant.',
      section: 'Technology'
    },
    '/applications/': {
      type: 'CollectionPage',
      name: 'SolarEX PV Glass Applications',
      description: 'SolarEX application routes for desert and dust, coastal and salt, commercial rooftop and utility-scale PV glass contexts.',
      section: 'Applications'
    },
    '/applications/desert-and-dust/': {
      type: 'WebPage',
      name: 'Desert and Dust PV Glass Application Route',
      description: 'SolarEX application route for dust, sand, high irradiance, water-constrained and desert-adjacent PV glass contexts.',
      section: 'Applications'
    },
    '/applications/coastal-and-salt/': {
      type: 'WebPage',
      name: 'Coastal and Salt PV Glass Application Route',
      description: 'SolarEX application route for salt aerosol, humidity, rainfall, mixed grime and coastal PV glass contexts.',
      section: 'Applications'
    },
    '/applications/commercial-rooftop/': {
      type: 'WebPage',
      name: 'Commercial Rooftop PV Glass Application Route',
      description: 'SolarEX application route for rooftop access, cleaning safety, urban contamination, ROI assumptions and commercial rooftop PV glass contexts.',
      section: 'Applications'
    },
    '/applications/utility-scale/': {
      type: 'WebPage',
      name: 'Utility-Scale PV Glass Application Route',
      description: 'SolarEX application route for large-area PV glass assets, treated/control pilot design, O&M logistics and scale-up review.',
      section: 'Applications'
    },
    '/markets/': {
      type: 'CollectionPage',
      name: 'SolarEX PV Glass Markets',
      description: 'SolarEX market routes for Europe, Middle East/GCC and the Nordics based on regional PV glass operating contexts.',
      section: 'Markets'
    },
    '/markets/europe/': {
      type: 'WebPage',
      name: 'SolarEX Europe PV Glass Market Route',
      description: 'SolarEX Europe market route for mixed climates, rooftops, utility-scale PV, coastal exposure, dust, pollen, grime, rainfall and O&M models.',
      section: 'Markets'
    },
    '/markets/middle-east-gcc/': {
      type: 'WebPage',
      name: 'SolarEX Middle East / GCC PV Glass Market Route',
      description: 'SolarEX Middle East and GCC market route for dust-heavy, water-constrained, high-irradiance PV glass cases.',
      section: 'Markets'
    },
    '/markets/nordics/': {
      type: 'WebPage',
      name: 'SolarEX Nordics PV Glass Market Route',
      description: 'SolarEX Nordics market route for seasonal light, low-UV periods, rain, snow, salt exposure and access-sensitive PV glass cases.',
      section: 'Markets'
    },
    '/proof-results/': {
      type: 'CollectionPage',
      name: 'SolarEX Proof and Results',
      description: 'Public SolarEX proof and results route for evidence review.',
      section: 'Evidence'
    },
    '/projects/': {
      type: 'CollectionPage',
      name: 'SolarEX Projects',
      description: 'SolarEX project and pilot context route.',
      section: 'Evidence'
    },
    '/case-studies/': {
      type: 'CollectionPage',
      name: 'SolarEX Case Studies',
      description: 'SolarEX public case-study context route.',
      section: 'Evidence'
    },
    '/documentation/': {
      type: 'CollectionPage',
      name: 'SolarEX Documentation',
      description: 'SolarEX public technical documentation and file-review route.',
      section: 'Documentation'
    },
    '/faq/': {
      type: 'FAQPage',
      name: 'SolarEX FAQ',
      description: 'SolarEX question-and-answer route covering technology, application logic, evidence, documentation and commercial review.',
      section: 'Documentation',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between SolarEX Quartz and SolarEX Titan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SolarEX Quartz SiO₂ is the passive UV-independent hydrophobic/oleophobic easy-clean PV glass protection route. SolarEX Titan TiO₂ is the active UV-dependent photocatalytic hydrophilic/superhydrophilic route where relevant.'
          }
        },
        {
          '@type': 'Question',
          name: 'When should a project request SolarEX technical review?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technical review should be used when site conditions, contamination profile, UV context, cleaning model, ROI assumptions, pilot design or product-route selection must be confirmed.'
          }
        }
      ]
    },
    '/partners/': {
      type: 'WebPage',
      name: 'SolarEX Partners',
      description: 'SolarEX partner route for applicators, EPC teams, O&M operators, distributors and market-development discussions.',
      section: 'Commercial'
    },
    '/technical-review/': {
      type: 'ContactPage',
      name: 'SolarEX Technical Review',
      description: 'SolarEX technical review route for site-specific Quartz SiO₂, Titan TiO₂, ROI modeling, documentation review and controlled PV glass pilot planning.',
      section: 'Commercial'
    },
    '/roi-calculator/': {
      type: 'WebPage',
      name: 'SolarEX ROI Calculator',
      description: 'Canonical handoff route to the approved SolarEX ROI Calculator for PV glass coating ROI screening.',
      section: 'Commercial',
      potentialAction: {
        '@type': 'ViewAction',
        target: 'https://nanotech-solutions-norway.github.io/SolarEX-ROI-Calculator/'
      }
    },
    '/contact/': {
      type: 'ContactPage',
      name: 'Contact SolarEX',
      description: 'Contact SolarEX for technical review, commercial discussion, documentation request, partner dialogue or pilot assessment.',
      section: 'Commercial'
    }
  };

  const breadcrumbs = {
    '/': ['Home'],
    '/technology/': ['Home', 'Technology'],
    '/quartz/': ['Home', 'Technology', 'SolarEX Quartz SiO₂'],
    '/titan/': ['Home', 'Technology', 'SolarEX Titan TiO₂'],
    '/applications/': ['Home', 'Applications'],
    '/applications/desert-and-dust/': ['Home', 'Applications', 'Desert and Dust'],
    '/applications/coastal-and-salt/': ['Home', 'Applications', 'Coastal and Salt'],
    '/applications/commercial-rooftop/': ['Home', 'Applications', 'Commercial Rooftop'],
    '/applications/utility-scale/': ['Home', 'Applications', 'Utility-Scale'],
    '/markets/': ['Home', 'Markets'],
    '/markets/europe/': ['Home', 'Markets', 'Europe'],
    '/markets/middle-east-gcc/': ['Home', 'Markets', 'Middle East / GCC'],
    '/markets/nordics/': ['Home', 'Markets', 'Nordics'],
    '/proof-results/': ['Home', 'Evidence', 'Proof and Results'],
    '/projects/': ['Home', 'Evidence', 'Projects'],
    '/case-studies/': ['Home', 'Evidence', 'Case Studies'],
    '/documentation/': ['Home', 'Documentation'],
    '/faq/': ['Home', 'FAQ'],
    '/partners/': ['Home', 'Partners'],
    '/technical-review/': ['Home', 'Technical Review'],
    '/roi-calculator/': ['Home', 'ROI Calculator'],
    '/contact/': ['Home', 'Contact']
  };

  const urlForPath = (path) => `${CANONICAL_ORIGIN}${path}`;

  const breadcrumbFor = (path) => {
    const parts = breadcrumbs[path];
    if (!parts || path === '/') return null;
    const inferredPaths = {
      Home: '/',
      Technology: '/technology/',
      Applications: '/applications/',
      Markets: '/markets/',
      Evidence: '/proof-results/',
      Documentation: '/documentation/',
      FAQ: '/faq/',
      Partners: '/partners/',
      'Technical Review': '/technical-review/',
      'ROI Calculator': '/roi-calculator/',
      Contact: '/contact/',
      'SolarEX Quartz SiO₂': '/quartz/',
      'SolarEX Titan TiO₂': '/titan/',
      'Desert and Dust': '/applications/desert-and-dust/',
      'Coastal and Salt': '/applications/coastal-and-salt/',
      'Commercial Rooftop': '/applications/commercial-rooftop/',
      'Utility-Scale': '/applications/utility-scale/',
      Europe: '/markets/europe/',
      'Middle East / GCC': '/markets/middle-east-gcc/',
      Nordics: '/markets/nordics/',
      'Proof and Results': '/proof-results/',
      Projects: '/projects/',
      'Case Studies': '/case-studies/'
    };
    return {
      '@type': 'BreadcrumbList',
      '@id': `${urlForPath(path)}#breadcrumb`,
      itemListElement: parts.map((name, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name,
        item: urlForPath(inferredPaths[name] || path)
      }))
    };
  };

  const buildGraph = (path, config) => {
    const url = urlForPath(path);
    const organization = {
      '@type': 'Organization',
      '@id': `${CANONICAL_ORIGIN}/#organization`,
      name: ORG_NAME,
      url: CANONICAL_ORIGIN,
      email: CONTACT_EMAIL
    };

    const website = {
      '@type': 'WebSite',
      '@id': `${CANONICAL_ORIGIN}/#website`,
      name: SITE_NAME,
      url: CANONICAL_ORIGIN,
      publisher: { '@id': `${CANONICAL_ORIGIN}/#organization` },
      inLanguage: 'en'
    };

    const page = {
      '@type': config.type || 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: config.name,
      description: config.description,
      isPartOf: { '@id': `${CANONICAL_ORIGIN}/#website` },
      publisher: { '@id': `${CANONICAL_ORIGIN}/#organization` },
      inLanguage: 'en',
      about: [
        'PV glass surface engineering',
        'SolarEX Quartz SiO₂',
        'SolarEX Titan TiO₂'
      ],
      keywords: [
        'PV glass',
        'SolarEX',
        'SiO₂',
        'TiO₂',
        'solar panel glass coating'
      ],
      mainEntityOfPage: url
    };

    if (config.section) page.articleSection = config.section;
    if (config.mainEntity) page.mainEntity = config.mainEntity;
    if (config.potentialAction) page.potentialAction = config.potentialAction;
    if (config.type === 'ContactPage') page.email = CONTACT_EMAIL;

    const graph = [organization, website, page];
    const breadcrumb = breadcrumbFor(path);
    if (breadcrumb) graph.push(breadcrumb);
    return { '@context': 'https://schema.org', '@graph': graph };
  };

  const inject = () => {
    if (document.getElementById('solarex-structured-data')) return;
    const path = normalizePath();
    const config = pageMap[path];
    if (!config) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'solarex-structured-data';
    script.textContent = JSON.stringify(buildGraph(path, config));
    document.head.appendChild(script);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject, { once: true });
  } else {
    inject();
  }
})();
