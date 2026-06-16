/**
 * Júnior Silva — Portfólio
 * script.js — Lógica de interatividade e animações
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('✨ Portfólio de Júnior Silva carregado com sucesso!');

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  
  // Alterna o tema
  themeToggle.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  });

  // --- Menu Mobile ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
      mobileMenuBtn.classList.remove('active');
    });
  });

  // --- Scroll Spy with IntersectionObserver ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  const spyOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, spyOptions);

  sections.forEach(section => spyObserver.observe(section));

  // --- Nav Scrolled & Back to Top (Throttled) ---
  const nav = document.querySelector('nav');
  const backToTopBtn = document.getElementById('back-to-top');
  let isScrolling = false;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
      backToTopBtn.classList.add('visible');
    } else {
      nav.classList.remove('scrolled');
      backToTopBtn.classList.remove('visible');
    }
    isScrolling = false;
  };

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(handleScroll);
      isScrolling = true;
    }
  });
  handleScroll(); // Init

  // --- Back to Top Click ---
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

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

  reveals.forEach(reveal => revealOnScroll.observe(reveal));
});

