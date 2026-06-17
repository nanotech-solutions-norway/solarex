document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-PROOF-HERO-001': ['MANUAL-ASSET-PROOF-HERO-001', 'assets/img/proof-results/proof-hero-evidence.webp', 'SolarEX Projects Evidence hero reference'],
    'VIS-PROOF-PRINCIPLE-001': ['MANUAL-ASSET-PROOF-PRINCIPLE-001', 'assets/img/proof-results/proof-principle.webp', 'SolarEX evidence principle reference'],
    'VIS-PROOF-EVIDENCE-MAP-001': ['MANUAL-ASSET-PROOF-EVIDENCE-MAP-001', 'assets/img/proof-results/proof-evidence-map.webp', 'SolarEX evidence map reference'],
    'VIS-PROOF-RESULTS-TABLE-001': ['MANUAL-ASSET-PROOF-RESULTS-TABLE-001', 'assets/img/proof-results/proof-results-table.webp', 'SolarEX results summary reference'],
    'VIS-PROOF-QUARTZ-001': ['MANUAL-ASSET-PROOF-QUARTZ-001', 'assets/img/proof-results/proof-quartz-evidence.webp', 'SolarEX Quartz evidence reference'],
    'VIS-PROOF-TITAN-001': ['MANUAL-ASSET-PROOF-TITAN-001', 'assets/img/proof-results/proof-titan-evidence.webp', 'SolarEX Titan evidence reference'],
    'VIS-PROOF-VALIDATION-METHOD-001': ['MANUAL-ASSET-PROOF-VALIDATION-METHOD-001', 'assets/img/proof-results/proof-validation-method.webp', 'SolarEX validation method reference'],
    'VIS-PROOF-CLAIM-BOUNDARY-001': ['MANUAL-ASSET-PROOF-CLAIM-BOUNDARY-001', 'assets/img/proof-results/proof-claim-boundary.webp', 'SolarEX claim boundary reference'],
    'VIS-PROOF-FAQ-001': ['MANUAL-ASSET-PROOF-FAQ-001', 'assets/img/proof-results/proof-faq.webp', 'SolarEX proof FAQ reference']
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
