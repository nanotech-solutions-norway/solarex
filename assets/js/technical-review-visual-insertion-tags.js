document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-REVIEW-HERO-001': ['MANUAL-ASSET-REVIEW-HERO-001', 'assets/img/technical-review/review-hero-routing.webp', 'SolarEX Technical Review hero reference'],
    'VIS-REVIEW-PRINCIPLE-001': ['MANUAL-ASSET-REVIEW-PRINCIPLE-001', 'assets/img/technical-review/review-principle.webp', 'Technical review principle reference'],
    'VIS-REVIEW-ROUTES-001': ['MANUAL-ASSET-REVIEW-ROUTES-001', 'assets/img/technical-review/review-routes.webp', 'Technical review routes reference'],
    'VIS-REVIEW-WORKFLOW-001': ['MANUAL-ASSET-REVIEW-WORKFLOW-001', 'assets/img/technical-review/review-workflow.webp', 'Technical review workflow reference'],
    'VIS-REVIEW-FORM-001': ['MANUAL-ASSET-REVIEW-FORM-001', 'assets/img/technical-review/review-form-preview.webp', 'Technical review form preview reference'],
    'VIS-REVIEW-INPUTS-001': ['MANUAL-ASSET-REVIEW-INPUTS-001', 'assets/img/technical-review/review-inputs.webp', 'Required review inputs reference'],
    'VIS-REVIEW-BACKEND-001': ['MANUAL-ASSET-REVIEW-BACKEND-001', 'assets/img/technical-review/review-backend-status.webp', 'Review backend status reference'],
    'VIS-REVIEW-FAQ-001': ['MANUAL-ASSET-REVIEW-FAQ-001', 'assets/img/technical-review/review-faq.webp', 'Technical review FAQ reference']
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
