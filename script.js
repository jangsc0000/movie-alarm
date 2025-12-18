document.addEventListener('DOMContentLoaded', () => {
    // Spotlight Effect
    const spotlight = document.querySelector('.spotlight');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        spotlight.style.setProperty('--x', `${x}px`);
        spotlight.style.setProperty('--y', `${y}px`);
    });

    // Touch support for spotlight (mobile)
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        spotlight.style.setProperty('--x', `${x}px`);
        spotlight.style.setProperty('--y', `${y}px`);
    }, { passive: true });


    // Create Floating Background Icons
    const bgContainer = document.getElementById('background-animation');
    const icons = [
        'fa-ticket', 
        'fa-film', 
        'fa-video', 
        'fa-bell', 
        'fa-clapperboard'
    ];
    
    // Number of floating elements
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const el = document.createElement('i');
        const iconClass = icons[Math.floor(Math.random() * icons.length)];
        el.classList.add('fa-solid', iconClass, 'floating-icon');
        
        // Random positioning and properties
        const startLeft = Math.random() * 100; // 0% to 100%
        const fontSize = Math.random() * 20 + 20; // 20px to 40px
        const duration = Math.random() * 10 + 10; // 10s to 20s
        const delay = Math.random() * 10; // 0s to 10s
        
        el.style.left = `${startLeft}%`;
        el.style.fontSize = `${fontSize}px`;
        el.style.animationDuration = `${duration}s`;
        el.style.animationDelay = `-${delay}s`; // Negative delay to start mid-animation
        
        bgContainer.appendChild(el);
    }

    // Add 3D Tilt Effect to Hero Section
    const hero = document.querySelector('.hero-content');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        
        hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        hero.style.transition = 'transform 0.1s ease';
    });

    // Reset tilt when mouse leaves
    document.addEventListener('mouseleave', () => {
        hero.style.transform = 'rotateY(0deg) rotateX(0deg)';
        hero.style.transition = 'transform 0.5s ease';
    });
});
