// Navbar Scroll Effect
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');

// Toggle Mobile Menu
function toggleMenu() {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Toggle body scroll
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';

    // Toggle icon between bars and times
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Close mobile menu when clicking on a link or outside
function closeMenu() {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = '';

    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// Close menu when clicking on a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        closeMenu();
    }
});

// Close menu when clicking outside
window.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.nav-toggle')) {
        closeMenu();
    }
});

// Navbar scroll effect
window.onscroll = function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled-nav');
    } else {
        nav.classList.remove('scrolled-nav');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav');
    function onScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
});

// Initialize on load
if (window.scrollY > 50) {
    document.querySelector('nav').classList.add('scrolled-nav');
}

// Active section highlight
function setActiveSection() {
    const scrollPosition = window.scrollY + 150;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to current section's nav link
            const activeLink = document.querySelector(`nav a[href*="${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Run on load and scroll
window.addEventListener('load', setActiveSection);
window.addEventListener('scroll', setActiveSection);

// Mobile menu toggle
navToggle.addEventListener('click', toggleMenu);

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Remove observer after animation runs
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate each section
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only handle internal links
        if (!href.startsWith('#')) return;

        e.preventDefault();

        // If home link, scroll to top
        if (href === '#' || href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // For section links
        const targetSection = document.querySelector(href);
        if (targetSection) {
            const offset = 100; // Same as in setActiveSection
            const targetPosition = targetSection.offsetTop - offset;

            // Update URL
            history.pushState(null, '', href);

            // Update active class
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Scroll to section
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animasi judul saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero h1');
    title.classList.add('animate');
});

