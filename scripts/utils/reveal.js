// reveal.js — Intersection Observer for Scroll Reveals

export function initReveal() {
  const targets = document.querySelectorAll('.reveal');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px'
    }
  );

  targets.forEach(el => observer.observe(el));
}
