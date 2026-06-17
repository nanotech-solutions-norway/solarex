document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-PROJECTS-HERO-001': ['MANUAL-ASSET-PROJECTS-HERO-001', 'assets/img/projects/projects-hero-pilot-review.webp', 'SolarEX Projects Evidence hero reference'],
    'VIS-PROJECTS-PRINCIPLE-001': ['MANUAL-ASSET-PROJECTS-PRINCIPLE-001', 'assets/img/projects/projects-principle.webp', 'SolarEX project principle reference'],
    'VIS-PROJECTS-ROUTES-001': ['MANUAL-ASSET-PROJECTS-ROUTES-001', 'assets/img/projects/projects-routes.webp', 'SolarEX project route reference'],
    'VIS-PROJECTS-WORKFLOW-001': ['MANUAL-ASSET-PROJECTS-WORKFLOW-001', 'assets/img/projects/projects-workflow.webp', 'SolarEX project workflow reference'],
    'VIS-PROJECTS-PATHWAY-TABLE-001': ['MANUAL-ASSET-PROJECTS-PATHWAY-TABLE-001', 'assets/img/projects/projects-pathway-table.webp', 'SolarEX pathway selection reference'],
    'VIS-PROJECTS-PILOT-DESIGN-001': ['MANUAL-ASSET-PROJECTS-PILOT-DESIGN-001', 'assets/img/projects/projects-pilot-design.webp', 'SolarEX pilot design reference'],
    'VIS-PROJECTS-EVIDENCE-001': ['MANUAL-ASSET-PROJECTS-EVIDENCE-001', 'assets/img/projects/projects-evidence.webp', 'SolarEX evidence integration reference'],
    'VIS-PROJECTS-DELIVERABLES-001': ['MANUAL-ASSET-PROJECTS-DELIVERABLES-001', 'assets/img/projects/projects-deliverables.webp', 'SolarEX project deliverables reference'],
    'VIS-PROJECTS-FAQ-001': ['MANUAL-ASSET-PROJECTS-FAQ-001', 'assets/img/projects/projects-faq.webp', 'SolarEX project FAQ reference']
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
