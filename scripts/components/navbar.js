// navbar.js — Global Navigation Component

export function renderNavbar(activePage = '') {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.id = 'main-nav';

  const pages = [
    { href: 'index.html',        label: 'Journey'    },
    { href: 'journal.html',      label: 'Journal'    },
    { href: 'conversion.html',   label: 'Conversion' },
    { href: 'passion-plan.html', label: 'Passion Plan' },
    { href: 'sip-outputs.html',  label: 'Synthesis'  },
  ];

  nav.innerHTML = `
    <span class="nav__wordmark">The Growth of a Quiet Soul</span>
    <ul class="nav__links">
      ${pages.map(p => `
        <li>
          <a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">
            ${p.label}
          </a>
        </li>
      `).join('')}
    </ul>
  `;

  document.body.prepend(nav);

  // Scroll border
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Progress line
  const progressLine = document.createElement('div');
  progressLine.className = 'progress-line';
  document.body.appendChild(progressLine);

  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressLine.style.width = `${Math.min(scrolled, 100)}%`;
  }, { passive: true });
}
