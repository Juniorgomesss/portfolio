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
});
