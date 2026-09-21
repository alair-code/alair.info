/**
 * Sistema de reveal-on-scroll leve.
 * Um único IntersectionObserver para toda a página: elementos com [data-reveal]
 * entram com fade + deslocamento vertical ao entrarem no viewport.
 *
 * - Agrupamentos: um container com [data-reveal-group] faz os filhos
 *   [data-reveal] entrarem em cascata (stagger de ~70ms, limitado a 280ms).
 * - Só atua quando <html> tem a classe `reveal-ready` (adicionada em main.tsx),
 *   garantindo que o conteúdo nunca fique invisível se o JS falhar.
 * - Respeita prefers-reduced-motion: a visibilidade é imediata (via CSS) e
 *   aqui evitamos adicionar atrasos, que não teriam efeito.
 */

const STAGGER_MS = 70;
const MAX_DELAY_MS = 280;

export function initReveal(): () => void {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return () => {};
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-revealed');
        observer.unobserve(el);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  const applyStagger = (container: Element) => {
    let index = 0;
    container.querySelectorAll('[data-reveal]').forEach((el) => {
      const delay = Math.min(index * STAGGER_MS, MAX_DELAY_MS);
      (el as HTMLElement).style.setProperty('--reveal-delay', `${delay}ms`);
      index += 1;
    });
  };

  // Agrupamentos primeiro, para que o delay em cascata seja calculado por grupo
  document.querySelectorAll('[data-reveal-group]').forEach(applyStagger);

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add('is-revealed');
      return;
    }
    observer.observe(el);
  });

  return () => observer.disconnect();
}
