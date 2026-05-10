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

    // 2. Simple Scroll Animation for Sections
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

    // 3. Generative Background Art
    const createMemoryArt = () => {
        const background = document.createElement('div');
        background.style.position = 'fixed';
        background.style.top = '0';
        background.style.left = '0';
        background.style.width = '100%';
        background.style.height = '100%';
        background.style.zIndex = '-1';
        background.style.overflow = 'hidden';
        background.style.pointerEvents = 'none';
        document.body.appendChild(background);

        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 300 + 100;
            
            shape.style.position = 'absolute';
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.background = `rgba(44, 62, 80, 0.02)`;
            shape.style.borderRadius = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.filter = 'blur(60px)';
            shape.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            background.appendChild(shape);
        }
    };

    // Set initial state for sections
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });

    // Run initializations
    revealSection();
    createMemoryArt();
    window.addEventListener('scroll', revealSection);

});