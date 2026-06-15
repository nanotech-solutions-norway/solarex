document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-HOME-HERO-001': {
      tag: 'MANUAL-ASSET-HOME-HERO-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering / 1_SolarEX-Surface-Engineering-for-PV-Glass.png',
      target: 'assets/img/home/solar-ex-home-hero-pv-glass.png',
      use: 'Hero background image with dark overlay; replace current CSS placeholder background.'
    },
    'VIS-HOME-SURFACE-001': {
      tag: 'MANUAL-ASSET-HOME-SURFACE-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering / 2_Why-Surface-Engineering-Matters.png, upper section',
      target: 'assets/img/home/home-surface-engineering-matters.png',
      use: 'Reference for Why Surface Engineering Matters layout and four mechanism cards.'
    },
    'VIS-HOME-PATHWAYS-001': {
      tag: 'MANUAL-ASSET-HOME-PATHWAYS-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering / 2_Why-Surface-Engineering-Matters.png, Two Pathways section',
      target: 'assets/img/home/home-two-pathways-quartz-titan.png',
      use: 'Reference for Quartz SiO2 and Titan TiO2 pathway split.'
    },
    'VIS-HOME-PARAMETERS-001': {
      tag: 'MANUAL-ASSET-HOME-PARAMETERS-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering / 2_Why-Surface-Engineering-Matters.png, Validated Technical Parameters section',
      target: 'assets/img/home/home-validated-technical-parameters.png',
      use: 'Reference for paired Quartz and Titan parameter blocks.'
    },
    'VIS-HOME-FIT-MATRIX-001': {
      tag: 'MANUAL-ASSET-HOME-FIT-MATRIX-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering / 2_Why-Surface-Engineering-Matters.png, Pathway Fit section',
      target: 'assets/img/home/home-pathway-fit-matrix.png',
      use: 'Reference for operating environment fit matrix.'
    },
    'VIS-HOME-EVIDENCE-001': {
      tag: 'MANUAL-ASSET-HOME-EVIDENCE-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering / 2_Why-Surface-Engineering-Matters.png, Validated Evidence section',
      target: 'assets/img/home/home-evidence-commercial-value.png',
      use: 'Reference for study output and evidence classification diagram.'
    },
    'VIS-HOME-PROCESS-001': {
      tag: 'MANUAL-ASSET-HOME-PROCESS-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering.pptx, workflow slide/section',
      target: 'assets/img/home/home-site-assessment-workflow.png',
      use: 'Reference for site assessment to evidence review process.'
    },
    'VIS-HOME-FAQ-001': {
      tag: 'MANUAL-ASSET-HOME-FAQ-001',
      source: 'SolarEX-pres / SolarEX-PV-Glass-Coatings-or-SiO-and-TiO-Surface-Engineering.pptx, FAQ/technical questions section',
      target: 'assets/img/home/home-technical-questions.png',
      use: 'Reference for compact technical questions and AEO answer blocks.'
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
