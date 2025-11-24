// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// ===== Sticky Header =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    // Only run on pages with sections (homepage)
    if (sections.length === 0) return;
    
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                // Don't remove active from login/register if on those pages
                const href = link.getAttribute('href');
                if (!href.includes('login.html') && !href.includes('register.html')) {
                    link.classList.remove('active');
                }
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Only add scroll listener if sections exist (homepage)
if (sections.length > 0) {
    window.addEventListener('scroll', activateNavLink);
}

// Set active link based on current page
if (navLinks.length > 0) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href.startsWith('#'))) {
            // Active link is already set in HTML, but ensure it's correct
            if (currentPage === 'login.html' && href.includes('login.html')) {
                link.classList.add('active');
            } else if (currentPage === 'register.html' && href.includes('register.html')) {
                link.classList.add('active');
            }
        }
    });
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-item, .service-card, .project-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Skill Progress Bars Animation =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target;
            const progressValue = progress.getAttribute('data-progress');
            progress.style.width = progressValue + '%';
            skillObserver.unobserve(progress);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual form handling)
    showFormMessage('Thank you! Your message has been sent successfully.', 'success');
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== Project Card Hover Effect Enhancement =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    // Activate home link on page load
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    } else {
        navLinks[0].classList.add('active');
    }
    
    // Add fade-in class to hero content
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) heroText.classList.add('fade-in', 'visible');
    if (heroImage) heroImage.classList.add('fade-in', 'visible');
});

// ===== Prevent layout shift on images =====
const images = document.querySelectorAll('img');
images.forEach(img => {
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    }
});

// ===== CV Download Handler =====
const downloadCV = document.getElementById('downloadCV');
if (downloadCV) {
    downloadCV.addEventListener('click', function(e) {
        // Check if file exists, if not show a message
        fetch(this.href)
            .then(response => {
                if (!response.ok) {
                    e.preventDefault();
                    alert('CV file not found. Please contact me directly for my resume.');
                }
            })
            .catch(() => {
                e.preventDefault();
                alert('CV file not found. Please contact me directly for my resume.');
            });
    });
}

// ===== Theme Toggle Functionality =====
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
        body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        updateThemeIcon("light");
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        updateThemeIcon("dark");
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle i');
    if (themeToggle) {
        if (theme === "dark") {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
        } else {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
        }
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.setAttribute("data-theme", "dark");
        updateThemeIcon("dark");
    } else {
        document.body.removeAttribute("data-theme");
        updateThemeIcon("light");
    }
});

// Listen for system theme changes
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem("theme")) {
            if (e.matches) {
                document.body.setAttribute("data-theme", "dark");
                updateThemeIcon("dark");
            } else {
                document.body.removeAttribute("data-theme");
                updateThemeIcon("light");
            }
        }
    });
}

