// Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu on link click (for mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Accessibility: toggle menu via keyboard on menu button
  menuBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navLinks.classList.toggle('show');
    }
  });
// Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu on link click (for mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Accessibility: toggle menu via keyboard on menu button
  menuBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navLinks.classList.toggle('show');
    }
  });
  emailjs.sendForm('service_1025031', 'template_mee27wf', form, 'ub6pp01lQVz2Vnn_S')
