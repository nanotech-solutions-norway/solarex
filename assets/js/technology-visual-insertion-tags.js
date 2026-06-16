document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-TECH-HERO-001': {
      tag: 'MANUAL-ASSET-TECH-HERO-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan / 1_Surface-Science-for-Solar-Assets.png',
      target: 'assets/img/technology/technology-hero-surface-science.webp',
      use: 'Hero background image with dark overlay; keep text and CTA unobstructed.'
    },
    'VIS-TECH-PRINCIPLE-001': {
      tag: 'MANUAL-ASSET-TECH-PRINCIPLE-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan / 2_Surface-Engineering-Is-a-Technical-Decision.png, engineering principle section',
      target: 'assets/img/technology/technology-engineering-principle.webp',
      use: 'Reference for the engineering-principle visual/card composition.'
    },
    'VIS-TECH-PATHWAYS-001': {
      tag: 'MANUAL-ASSET-TECH-PATHWAYS-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan / 2_Surface-Engineering-Is-a-Technical-Decision.png, two pathway section',
      target: 'assets/img/technology/technology-two-pathways.webp',
      use: 'Reference for Quartz SiO2 and Titan TiO2 split pathway visual.'
    },
    'VIS-TECH-COMPARISON-001': {
      tag: 'MANUAL-ASSET-TECH-COMPARISON-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan / 2_Surface-Engineering-Is-a-Technical-Decision.png, mechanism comparison section',
      target: 'assets/img/technology/technology-mechanism-comparison.webp',
      use: 'Reference for Quartz/Titan mechanism comparison table or diagram.'
    },
    'VIS-TECH-SURFACE-SCIENCE-001': {
      tag: 'MANUAL-ASSET-TECH-SURFACE-SCIENCE-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, surface-science section',
      target: 'assets/img/technology/technology-surface-science.webp',
      use: 'Reference for surface energy, nano-scale film and adhesion behavior visual.'
    },
    'VIS-TECH-DEEP-DIVE-001': {
      tag: 'MANUAL-ASSET-TECH-DEEP-DIVE-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, product deep-dive section',
      target: 'assets/img/technology/technology-product-deep-dive.webp',
      use: 'Reference for passive Quartz versus active Titan architecture comparison.'
    },
    'VIS-TECH-UV-DECISION-001': {
      tag: 'MANUAL-ASSET-TECH-UV-DECISION-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, UV-dependency section',
      target: 'assets/img/technology/technology-uv-decision.webp',
      use: 'Reference for UV availability as the decision divider.'
    },
    'VIS-TECH-APPLICATION-001': {
      tag: 'MANUAL-ASSET-TECH-APPLICATION-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, application engineering section',
      target: 'assets/img/technology/technology-application-engineering.webp',
      use: 'Reference for prepare/apply/cure/verify workflow.'
    },
    'VIS-TECH-EVIDENCE-001': {
      tag: 'MANUAL-ASSET-TECH-EVIDENCE-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, evidence framework section',
      target: 'assets/img/technology/technology-evidence-framework.webp',
      use: 'Reference for evidence categories and test-condition control.'
    },
    'VIS-TECH-VALIDATION-001': {
      tag: 'MANUAL-ASSET-TECH-VALIDATION-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, validation methodology section',
      target: 'assets/img/technology/technology-validation-methodology.webp',
      use: 'Reference for UV, methylene blue, SEM and photon-efficiency validation context.'
    },
    'VIS-TECH-DECISION-TABLE-001': {
      tag: 'MANUAL-ASSET-TECH-DECISION-TABLE-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, decision table section',
      target: 'assets/img/technology/technology-decision-table.webp',
      use: 'Reference for environment-based Quartz/Titan selection table.'
    },
    'VIS-TECH-FAQ-001': {
      tag: 'MANUAL-ASSET-TECH-FAQ-001',
      source: 'SolarEX-pres / SolarEX-Technology-or-SolarEX-Quartz-and-Titan.pptx, FAQ section',
      target: 'assets/img/technology/technology-faq.webp',
      use: 'Reference for compact technical question cards and AEO answers.'
    }
  };

  Object.entries(plan).forEach(([placeholderId, item]) => {
    const node = document.querySelector(`[data-placeholder-id="${placeholderId}"]`);
    if (!node || node.querySelector('.rx-manual-asset-tag')) return;
    const tag = document.createElement('div');
    tag.className = 'rx-manual-asset-tag';
    tag.innerHTML = `<strong>${item.tag}</strong><span>Target: ${item.target}</span><span>Source: ${item.source}</span><span>${item.use}</span>`;
    node.appendChild(tag);
  });
});
