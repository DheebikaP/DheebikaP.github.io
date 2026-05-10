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

    for (let i = 0; i < 20; i++) {
        const shard = document.createElement('div');
        const width = Math.random() * 400 + 100;
        const height = Math.random() * 200 + 50;
        
        shard.style.position = 'absolute';
        shard.style.width = `${width}px`;
        shard.style.height = `${height}px`;
        // Using a muted 'ink' color to represent archival records
        shard.style.background = `rgba(44, 62, 80, 0.03)`; 
        shard.style.top = `${Math.random() * 100}%`;
        shard.style.left = `${Math.random() * 100}%`;
        
        // Creative Clip-Path: Creates irregular, paper-like shards
        shard.style.clipPath = `polygon(
            ${Math.random()*20}% ${Math.random()*20}%, 
            ${80+Math.random()*20}% ${Math.random()*20}%, 
            ${80+Math.random()*20}% ${80+Math.random()*20}%, 
            ${Math.random()*20}% ${80+Math.random()*20}%
        )`;
        
        shard.style.transform = `rotate(${Math.random() * 45 - 22}deg)`;
        shard.style.filter = 'blur(1px)'; // Slight blur to feel like a distant memory
        
        background.appendChild(shard);
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
