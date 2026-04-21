// modal.js — Journal Entry Modal

let overlay, modal;

export function initModal() {
  overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-overlay';

  modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'entry-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

export function openModal(entry) {
  if (!modal) return;

  const imgSrc = entry.modalImage?.src || entry.image?.src;
  const imgAlt = entry.modalImage?.alt || entry.image?.alt || '';

  modal.innerHTML = `
    <div class="modal__inner">
      <button class="modal__close" aria-label="Close">&times;</button>
      ${imgSrc ? `
        <div class="modal-entry__image">
          <img src="${imgSrc}" alt="${imgAlt}" loading="lazy" />
        </div>
      ` : ''}
      <p class="modal-entry__number">${entry.number}</p>
      <h2 class="modal-entry__title">${entry.title}</h2>
      <div class="modal-entry__body">
        ${entry.body.map(p => `<p>${p}</p>`).join('')}
      </div>
    </div>
  `;

  modal.querySelector('.modal__close').addEventListener('click', closeModal);

  // Trigger open
  requestAnimationFrame(() => {
    overlay.classList.add('is-open');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
}

export function closeModal() {
  if (!overlay || !modal) return;
  overlay.classList.remove('is-open');
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}
