// Interactivity for Dheebika Periyasamy's Academic Portfolio

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Offset for the sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Simple Scroll Animation for Sections (Fades in as you scroll)
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (sectionTop < triggerPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.6s ease-out";
            }
        });
    };

    // Set initial state for sections
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });

    // Run once on load and then on scroll
    revealSection();
    window.addEventListener('scroll', revealSection);

});
