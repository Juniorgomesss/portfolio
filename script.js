/**
 * Júnior Silva — Portfólio
 * script.js — Lógica de interatividade e animações
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ Portfólio de Júnior Silva carregado com sucesso!');

  // --- Active Nav Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  const changeActiveLink = () => {
    let scrollPosition = window.scrollY + 100; // offset para ajustar detecção

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Executa no scroll
  window.addEventListener('scroll', changeActiveLink);
  // Executa uma vez no início
  changeActiveLink();

  // --- Scroll Reveal Animation ---
  const reveals = document.querySelectorAll('.reveal');
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
  });
});
