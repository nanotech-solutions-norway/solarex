document.addEventListener('DOMContentLoaded', () => {
  const plan = {
    'VIS-CONTACT-HERO-001': ['MANUAL-ASSET-CONTACT-HERO-001', 'assets/img/contact/contact-hero-routing.webp', 'SolarEX contact hero reference'],
    'VIS-CONTACT-PRINCIPLE-001': ['MANUAL-ASSET-CONTACT-PRINCIPLE-001', 'assets/img/contact/contact-principle.webp', 'SolarEX contact routing principle reference'],
    'VIS-CONTACT-ROUTES-001': ['MANUAL-ASSET-CONTACT-ROUTES-001', 'assets/img/contact/contact-routes.webp', 'SolarEX contact route cards reference'],
    'VIS-CONTACT-FORM-001': ['MANUAL-ASSET-CONTACT-FORM-001', 'assets/img/contact/contact-form-preview.webp', 'SolarEX staged contact form reference'],
    'VIS-CONTACT-INFO-001': ['MANUAL-ASSET-CONTACT-INFO-001', 'assets/img/contact/contact-info.webp', 'SolarEX contact information reference'],
    'VIS-CONTACT-BACKEND-001': ['MANUAL-ASSET-CONTACT-BACKEND-001', 'assets/img/contact/contact-backend-status.webp', 'SolarEX backend status reference'],
    'VIS-CONTACT-FAQ-001': ['MANUAL-ASSET-CONTACT-FAQ-001', 'assets/img/contact/contact-faq.webp', 'SolarEX contact FAQ reference']
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
