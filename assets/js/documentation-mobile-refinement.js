document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body.documentation-page');
  if (!page) return;

  const principleCards = document.querySelectorAll('#documentation-principle .doc-card');
  principleCards.forEach((card, index) => {
    card.setAttribute('data-mobile-step', String(index + 1).padStart(2, '0'));
  });

  const faqGrid = document.querySelector('#documentation-faq .doc-faq-grid');
  if (!faqGrid || faqGrid.classList.contains('is-enhanced')) return;

  const cards = Array.from(faqGrid.querySelectorAll('.doc-faq-card'));
  cards.forEach((card, index) => {
    const title = card.querySelector('h3');
    const body = card.querySelector('p');
    if (!title || !body) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'doc-mobile-faq-toggle';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `doc-mobile-faq-${index + 1}`);
    button.textContent = title.textContent.trim();

    const panel = document.createElement('div');
    panel.id = `doc-mobile-faq-${index + 1}`;
    panel.className = 'doc-mobile-faq-panel';
    panel.appendChild(body.cloneNode(true));

    card.textContent = '';
    card.appendChild(button);
    card.appendChild(panel);

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
    });
  });

  faqGrid.classList.add('is-enhanced');
});
