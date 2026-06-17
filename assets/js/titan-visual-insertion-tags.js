document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-TITAN-HERO-001': ['MANUAL-ASSET-TITAN-HERO-001', 'assets/img/titan/titan-hero-active-tio2.webp', 'SolarEX-pres Titan hero reference'],
    'VIS-TITAN-PATHWAY-001': ['MANUAL-ASSET-TITAN-PATHWAY-001', 'assets/img/titan/titan-active-pathway.webp', 'SolarEX-pres Titan active pathway reference'],
    'VIS-TITAN-MECHANISM-001': ['MANUAL-ASSET-TITAN-MECHANISM-001', 'assets/img/titan/titan-mechanism.webp', 'SolarEX-pres Titan mechanism reference'],
    'VIS-TITAN-TECHNICAL-PROFILE-001': ['MANUAL-ASSET-TITAN-TECHNICAL-PROFILE-001', 'assets/img/titan/titan-technical-profile.webp', 'SolarEX-pres Titan technical profile reference'],
    'VIS-TITAN-FIT-001': ['MANUAL-ASSET-TITAN-FIT-001', 'assets/img/titan/titan-fit.webp', 'SolarEX-pres Titan best-fit reference'],
    'VIS-TITAN-EVIDENCE-001': ['MANUAL-ASSET-TITAN-EVIDENCE-001', 'assets/img/titan/titan-evidence.webp', 'SolarEX Titan evidence reference'],
    'VIS-TITAN-SEQUENCE-001': ['MANUAL-ASSET-TITAN-SEQUENCE-001', 'assets/img/titan/titan-photocatalytic-sequence.webp', 'SolarEX-pres Titan sequence reference'],
    'VIS-TITAN-APPLICATION-001': ['MANUAL-ASSET-TITAN-APPLICATION-001', 'assets/img/titan/titan-application.webp', 'SolarEX Titan application reference'],
    'VIS-TITAN-SELECTION-001': ['MANUAL-ASSET-TITAN-SELECTION-001', 'assets/img/titan/titan-selection.webp', 'SolarEX-pres Titan selection reference'],
    'VIS-TITAN-FAQ-001': ['MANUAL-ASSET-TITAN-FAQ-001', 'assets/img/titan/titan-faq.webp', 'SolarEX-pres Titan FAQ reference']
  };

  Object.entries(plan).forEach(([placeholderId, values]) => {
    const node = document.querySelector(`[data-placeholder-id="${placeholderId}"]`);
    if (!node || node.querySelector('.rx-manual-asset-tag')) return;
    const tag = document.createElement('div');
    tag.className = 'rx-manual-asset-tag';
    tag.innerHTML = `<strong>${values[0]}</strong><span>Target: ${values[1]}</span><span>Source: ${values[2]}</span>`;
    node.appendChild(tag);
  });
});
