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

    // Generates 'Fractured Memory' shards instead of bubbles
const createPalimpsest = () => {
    const keywords = ['MEMORY', 'DISSENT', 'BODY', 'ARCHIVE', 'TAMIL', 'AFFECT', 'CARCERAL'];
    const artContainer = document.createElement('div');
    artContainer.style = 'position:fixed; top:0; left:0; width:100%; height:100%; z-index:-1; pointer-events:none; overflow:hidden;';
    document.body.appendChild(artContainer);

    for (let i = 0; i < 30; i++) {
        const span = document.createElement('span');
        span.innerText = keywords[Math.floor(Math.random() * keywords.length)];
        span.style = `
            position: absolute;
            font-family: 'Georgia', serif;
            font-size: ${Math.random() * 3 + 1}rem;
            color: rgba(44, 62, 80, 0.03);
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            transform: rotate(${Math.random() * 360}deg);
            white-space: nowrap;
        `;
        artContainer.appendChild(span);
    }
};
document.addEventListener('DOMContentLoaded', createPalimpsest);

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
