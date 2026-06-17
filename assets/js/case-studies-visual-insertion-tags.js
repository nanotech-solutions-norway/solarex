document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-CASE-HERO-001': ['MANUAL-ASSET-CASE-HERO-001', 'assets/img/case-studies/case-hero-evidence-contexts.webp', 'SolarEX case-study hero reference'],
    'VIS-CASE-PRINCIPLE-001': ['MANUAL-ASSET-CASE-PRINCIPLE-001', 'assets/img/case-studies/case-principle.webp', 'SolarEX case-study principle reference'],
    'VIS-CASE-LIBRARY-001': ['MANUAL-ASSET-CASE-LIBRARY-001', 'assets/img/case-studies/case-library.webp', 'SolarEX case library reference'],
    'VIS-CASE-MATRIX-001': ['MANUAL-ASSET-CASE-MATRIX-001', 'assets/img/case-studies/case-matrix.webp', 'SolarEX case matrix reference'],
    'VIS-CASE-TITAN-001': ['MANUAL-ASSET-CASE-TITAN-001', 'assets/img/case-studies/case-titan-study.webp', 'SolarEX Titan study context reference'],
    'VIS-CASE-QUARTZ-001': ['MANUAL-ASSET-CASE-QUARTZ-001', 'assets/img/case-studies/case-quartz-regional.webp', 'SolarEX Quartz regional context reference'],
    'VIS-CASE-PILOT-METHOD-001': ['MANUAL-ASSET-CASE-PILOT-METHOD-001', 'assets/img/case-studies/case-pilot-method.webp', 'SolarEX pilot method reference'],
    'VIS-CASE-CONVERSION-001': ['MANUAL-ASSET-CASE-CONVERSION-001', 'assets/img/case-studies/case-conversion-paths.webp', 'SolarEX case conversion reference'],
    'VIS-CASE-FAQ-001': ['MANUAL-ASSET-CASE-FAQ-001', 'assets/img/case-studies/case-faq.webp', 'SolarEX case FAQ reference']
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
