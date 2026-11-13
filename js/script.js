/**
 * MARTIAL ARTS ACADEMY - MAIN JAVASCRIPT
 * Vanilla JS for Responsive Nav, Active Page Highlighting, Dynamic Year,
 * Form Validation, FAQ Accordion, Program Filters, Lightbox, Scroll Reveal, and Scroll to Top
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- Dynamic Copyright Year ---
  const copyrightYearElem = document.getElementById('current-year');
  if (copyrightYearElem) {
    copyrightYearElem.textContent = new Date().getFullYear();
  }

  // --- Mobile Hamburger Menu ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function () {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside or clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // --- Active Navigation Link Detection ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // --- Sticky Header Shadow on Scroll ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // --- Scroll To Top Button ---
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- FAQ Accordion ---
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const item = this.parentElement;
      const isOpen = item.classList.contains('active');

      // Close other accordion items in same container
      const parentContainer = item.closest('.faq-container');
      if (parentContainer) {
        parentContainer.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Toggle current
      item.classList.toggle('active');
      this.setAttribute('aria-expanded', !isOpen);
    });
  });

  // --- Program / Filter Tabs ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filterable-item');

  if (filterButtons.length > 0 && filterItems.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-filter');

        filterItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category || (itemCat && itemCat.includes(category))) {
            item.style.display = '';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Lightbox Preview Modal for Placeholders ---
  const lightboxModal = document.getElementById('gallery-lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxContainer = document.getElementById('lightbox-placeholder-container');
  const galleryTriggers = document.querySelectorAll('[data-gallery-item]');

  if (lightboxModal && galleryTriggers.length > 0) {
    galleryTriggers.forEach(trigger => {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const placeholderClass = this.getAttribute('data-placeholder') || 'martial-arts-training';
        const imageSrc = this.getAttribute('data-img') || `assets/images/${placeholderClass}.jpg`;
        const title = this.getAttribute('data-title') || 'Martial Arts Session';
        const desc = this.getAttribute('data-desc') || 'Supervised training at Martial Arts Academy.';

        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxDesc) lightboxDesc.textContent = desc;

        if (lightboxContainer) {
          lightboxContainer.innerHTML = `
            <div style="position: relative; border-radius: 8px; overflow: hidden; max-height: 480px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              <img src="${imageSrc}" alt="${title}" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; display: block; margin: 0 auto;">
            </div>
          `;
        }

        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', function () {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal');
  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.88;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('active');
      }
    });
  }

  if (revealElements.length > 0) {
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Trigger once on load
  }

  // --- Validation Helpers ---
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateIndianMobile(phone) {
    // 10 digits, optionally starting with +91 or 0
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const re = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    return re.test(cleaned);
  }

  // --- Trial Enquiry Form Validation (contact.html & any trial forms) ---
  const trialForm = document.getElementById('trial-booking-form');
  if (trialForm) {
    trialForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      // Full Name
      const nameField = document.getElementById('trial-name');
      if (nameField) {
        if (!nameField.value.trim() || nameField.value.trim().length < 2) {
          nameField.classList.add('is-invalid');
          isValid = false;
        } else {
          nameField.classList.remove('is-invalid');
        }
      }

      // Mobile Number
      const phoneField = document.getElementById('trial-phone');
      if (phoneField) {
        if (!validateIndianMobile(phoneField.value.trim())) {
          phoneField.classList.add('is-invalid');
          isValid = false;
        } else {
          phoneField.classList.remove('is-invalid');
        }
      }

      // Email Address
      const emailField = document.getElementById('trial-email');
      if (emailField) {
        if (!validateEmail(emailField.value.trim())) {
          emailField.classList.add('is-invalid');
          isValid = false;
        } else {
          emailField.classList.remove('is-invalid');
        }
      }

      // Age
      const ageField = document.getElementById('trial-age');
      if (ageField) {
        const ageVal = parseInt(ageField.value, 10);
        if (!ageVal || ageVal < 5 || ageVal > 90) {
          ageField.classList.add('is-invalid');
          isValid = false;
        } else {
          ageField.classList.remove('is-invalid');
        }
      }

      // Preferred Program
      const programField = document.getElementById('trial-program');
      if (programField) {
        if (!programField.value || programField.value === '') {
          programField.classList.add('is-invalid');
          isValid = false;
        } else {
          programField.classList.remove('is-invalid');
        }
      }

      // Preferred Time
      const timeField = document.getElementById('trial-time');
      if (timeField) {
        if (!timeField.value || timeField.value === '') {
          timeField.classList.add('is-invalid');
          isValid = false;
        } else {
          timeField.classList.remove('is-invalid');
        }
      }

      // If valid, show success message & clear form
      const successAlert = document.getElementById('trial-success-alert');
      if (isValid) {
        trialForm.reset();
        if (successAlert) {
          successAlert.style.display = 'block';
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => {
            // Keep visible or fade after 10s
          }, 10000);
        }
      } else {
        if (successAlert) successAlert.style.display = 'none';
      }
    });

    // Real-time input cleaner for validation classes
    trialForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', function () {
        if (this.classList.contains('is-invalid')) {
          this.classList.remove('is-invalid');
        }
      });
      input.addEventListener('change', function () {
        if (this.classList.contains('is-invalid')) {
          this.classList.remove('is-invalid');
        }
      });
    });
  }

  // --- General Contact Form Validation (contact.html) ---
  const contactForm = document.getElementById('general-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      const contactName = document.getElementById('contact-name');
      if (contactName) {
        if (!contactName.value.trim() || contactName.value.trim().length < 2) {
          contactName.classList.add('is-invalid');
          isValid = false;
        } else {
          contactName.classList.remove('is-invalid');
        }
      }

      const contactPhone = document.getElementById('contact-phone');
      if (contactPhone) {
        if (!validateIndianMobile(contactPhone.value.trim())) {
          contactPhone.classList.add('is-invalid');
          isValid = false;
        } else {
          contactPhone.classList.remove('is-invalid');
        }
      }

      const contactEmail = document.getElementById('contact-email');
      if (contactEmail) {
        if (!validateEmail(contactEmail.value.trim())) {
          contactEmail.classList.add('is-invalid');
          isValid = false;
        } else {
          contactEmail.classList.remove('is-invalid');
        }
      }

      const contactMessage = document.getElementById('contact-message');
      if (contactMessage) {
        if (!contactMessage.value.trim() || contactMessage.value.trim().length < 5) {
          contactMessage.classList.add('is-invalid');
          isValid = false;
        } else {
          contactMessage.classList.remove('is-invalid');
        }
      }

      const contactSuccessAlert = document.getElementById('contact-success-alert');
      if (isValid) {
        contactForm.reset();
        if (contactSuccessAlert) {
          contactSuccessAlert.style.display = 'block';
          contactSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        if (contactSuccessAlert) contactSuccessAlert.style.display = 'none';
      }
    });

    contactForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', function () {
        if (this.classList.contains('is-invalid')) {
          this.classList.remove('is-invalid');
        }
      });
    });
  }
});
