document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-FAQ-HERO-001': ['MANUAL-ASSET-FAQ-HERO-001', 'assets/img/faq/faq-hero-questions.webp', 'SolarEX FAQ hero reference'],
    'VIS-FAQ-PRINCIPLE-001': ['MANUAL-ASSET-FAQ-PRINCIPLE-001', 'assets/img/faq/faq-principle.webp', 'SolarEX FAQ principle reference'],
    'VIS-FAQ-QUICK-ANSWERS-001': ['MANUAL-ASSET-FAQ-QUICK-ANSWERS-001', 'assets/img/faq/faq-quick-answers.webp', 'SolarEX FAQ quick answers reference'],
    'VIS-FAQ-QUARTZ-001': ['MANUAL-ASSET-FAQ-QUARTZ-001', 'assets/img/faq/faq-quartz.webp', 'SolarEX Quartz FAQ reference'],
    'VIS-FAQ-TITAN-001': ['MANUAL-ASSET-FAQ-TITAN-001', 'assets/img/faq/faq-titan.webp', 'SolarEX Titan FAQ reference'],
    'VIS-FAQ-EVIDENCE-001': ['MANUAL-ASSET-FAQ-EVIDENCE-001', 'assets/img/faq/faq-evidence.webp', 'SolarEX proof and ROI FAQ reference'],
    'VIS-FAQ-APPLICATION-001': ['MANUAL-ASSET-FAQ-APPLICATION-001', 'assets/img/faq/faq-application.webp', 'SolarEX application FAQ reference'],
    'VIS-FAQ-COMMERCIAL-001': ['MANUAL-ASSET-FAQ-COMMERCIAL-001', 'assets/img/faq/faq-commercial.webp', 'SolarEX commercial FAQ reference']
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
