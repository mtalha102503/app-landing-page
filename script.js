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
  });<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
  (function () {
    emailjs.init("ub6pp01lQVz2Vnn_S"); // Replace with your actual Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_1025031",    // Replace with your EmailJS service ID
      "template_mee27wf",   // Replace with your EmailJS template ID
      this
    ).then(
      function () {
        document.getElementById("status-message").textContent = "Message sent successfully!";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        document.getElementById("status-message").textContent = "Failed to send message. Please try again.";
        console.error("EmailJS error:", error);
      }
    );
  });
