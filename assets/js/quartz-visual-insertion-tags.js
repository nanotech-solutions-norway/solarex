document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-QUARTZ-HERO-001': {
      tag: 'MANUAL-ASSET-QUARTZ-HERO-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection / 1_SolarEX-Quartz-Passive-SiO-Surface-Engineering-for-Solar-Glass.png',
      target: 'assets/img/quartz/quartz-hero-passive-sio2.webp',
      use: 'Hero background image with dark overlay; keep Quartz SiO2 headline and CTA unobstructed.'
    },
    'VIS-QUARTZ-PATHWAY-001': {
      tag: 'MANUAL-ASSET-QUARTZ-PATHWAY-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection / 2_The-Passive-Pathway-for-Soiling-Control.png, passive pathway section',
      target: 'assets/img/quartz/quartz-passive-pathway.webp',
      use: 'Reference for no-UV, hydrophobic, oleophobic and cleaning-burden cards.'
    },
    'VIS-QUARTZ-MECHANISM-001': {
      tag: 'MANUAL-ASSET-QUARTZ-MECHANISM-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx, how Quartz works section',
      target: 'assets/img/quartz/quartz-mechanism.webp',
      use: 'Reference for SiO2 surface-energy and easy-clean mechanism visual.'
    },
    'VIS-QUARTZ-TECHNICAL-PROFILE-001': {
      tag: 'MANUAL-ASSET-QUARTZ-TECHNICAL-PROFILE-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx, technical profile section',
      target: 'assets/img/quartz/quartz-technical-profile.webp',
      use: 'Reference for Quartz technical profile table/cards.'
    },
    'VIS-QUARTZ-FIT-001': {
      tag: 'MANUAL-ASSET-QUARTZ-FIT-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx, where Quartz performs best section',
      target: 'assets/img/quartz/quartz-fit.webp',
      use: 'Reference for Quartz best-fit application cards.'
    },
    'VIS-QUARTZ-EVIDENCE-001': {
      tag: 'MANUAL-ASSET-QUARTZ-EVIDENCE-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx plus Quartz InterCos sources',
      target: 'assets/img/quartz/quartz-evidence.webp',
      use: 'Reference for Europe ROI, Scandinavian test and Middle East cleanliness evidence cards.'
    },
    'VIS-QUARTZ-ROI-001': {
      tag: 'MANUAL-ASSET-QUARTZ-ROI-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx, ROI model section',
      target: 'assets/img/quartz/quartz-roi-model.webp',
      use: 'Reference for structured Europe ROI scenario metrics.'
    },
    'VIS-QUARTZ-APPLICATION-001': {
      tag: 'MANUAL-ASSET-QUARTZ-APPLICATION-001',
      source: 'SolarEX Quartz Edition - Application Instructions v2.7 and Quartz reference deck',
      target: 'assets/img/quartz/quartz-application.webp',
      use: 'Reference for clean, apply, cure and verify workflow.'
    },
    'VIS-QUARTZ-SELECTION-001': {
      tag: 'MANUAL-ASSET-QUARTZ-SELECTION-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx, pathway selection section',
      target: 'assets/img/quartz/quartz-selection.webp',
      use: 'Reference for Quartz versus Titan decision split.'
    },
    'VIS-QUARTZ-FAQ-001': {
      tag: 'MANUAL-ASSET-QUARTZ-FAQ-001',
      source: 'SolarEX-pres / SolarEX-Quartz-SiO-Coating-or-Passive-PV-Glass-Protection.pptx, FAQ section',
      target: 'assets/img/quartz/quartz-faq.webp',
      use: 'Reference for compact Quartz technical question cards and AEO answers.'
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
