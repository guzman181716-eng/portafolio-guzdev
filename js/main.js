// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp quick-contact link — update the phone number below (formato: código de país + número, sin espacios)
const WHATSAPP_NUMBER = '527531124164';
const waLink = document.getElementById('whatsappLink');
if (waLink) {
  waLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, vi tu portafolio y quiero platicar sobre un sistema para mi negocio.')}`;
  waLink.target = '_blank';
  waLink.rel = 'noopener';
}

// Reveal-on-scroll for feature rows and cards
const revealTargets = document.querySelectorAll('.feature, .card, .strip-item');
revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => io.observe(el));

// Respect reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
