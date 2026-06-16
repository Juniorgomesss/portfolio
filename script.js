/**
 * Júnior Silva — Portfólio
 * script.js — Lógica de interatividade e animações
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ Portfólio de Júnior Silva carregado com sucesso!');

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Verifica a preferência salva no localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }

  // Alterna o tema
  themeToggle.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

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

  const nav = document.querySelector('nav');
  const handleScroll = () => {
    changeActiveLink();
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  // Executa no scroll
  window.addEventListener('scroll', handleScroll);
  // Executa uma vez no início
  handleScroll();

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
