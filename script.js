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

    // Set initial state for sections
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });

    // 3. Generative Artwork: The Palimpsest (Ghost-Text)
    // This draws faintly over the white background without altering the white canvas itself
    const createPalimpsestArt = () => {
        // Core research themes that will appear faintly in the background
        const keywords = ['MEMORY', 'DISSENT', 'BODY', 'ARCHIVE', 'TAMIL', 'AFFECT', 'CARCERAL'];
        
        const artContainer = document.createElement('div');
        // Setting a purely transparent container locked behind the content
        artContainer.style.position = 'fixed';
        artContainer.style.top = '0';
        artContainer.style.left = '0';
        artContainer.style.width = '100%';
        artContainer.style.height = '100%';
        artContainer.style.zIndex = '-1';
        artContainer.style.pointerEvents = 'none';
        artContainer.style.overflow = 'hidden';
        artContainer.style.backgroundColor = 'transparent'; 
        document.body.appendChild(artContainer);

        for (let i = 0; i < 25; i++) {
            const span = document.createElement('span');
            span.innerText = keywords[Math.floor(Math.random() * keywords.length)];
            
            // Randomizing size, position, and rotation for a scattered archival look
            span.style.position = 'absolute';
            span.style.fontFamily = "'Georgia', serif";
            span.style.fontSize = `${Math.random() * 3 + 1.5}rem`;
            // Extremely faint academic blue/grey color to ensure the white background stays bright
            span.style.color = 'rgba(44, 62, 80, 0.025)'; 
            span.style.top = `${Math.random() * 100}%`;
            span.style.left = `${Math.random() * 100}%`;
            span.style.transform = `rotate(${Math.random() * 360}deg)`;
            span.style.whiteSpace = 'nowrap';
            span.style.userSelect = 'none';
            
            artContainer.appendChild(span);
        }
    };

    // Run initializations
    revealSection();
    createPalimpsestArt();
    window.addEventListener('scroll', revealSection);

});
