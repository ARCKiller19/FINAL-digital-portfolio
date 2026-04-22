// footer.js — Global Footer Component

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container footer__inner">
      <p class="footer__wordmark">The Growth of a Quiet Soul</p>
      <p class="footer__note">Patricia Keana R. Roma &nbsp;&middot;&nbsp; AB Psychology &nbsp;&middot;&nbsp; Ateneo de Davao University &nbsp;&middot;&nbsp; SIP 2026</p>
    </div>
  `;
  document.body.appendChild(footer);
}
