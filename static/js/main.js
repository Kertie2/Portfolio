document.addEventListener('DOMContentLoaded', () => {

    /* ==================== CHANGEMENT DE THÈME (DARK/LIGHT MODE) ==================== */
    const themeButton = document.getElementById('theme-button');
    const htmlElement = document.documentElement;

    // Fonction pour appliquer le thème
    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        themeButton.classList.toggle('fa-sun', theme === 'dark');
        themeButton.classList.toggle('fa-moon', theme === 'light');
        localStorage.setItem('selected-theme', theme);
    };

    // Vérifier le thème sauvegardé au chargement de la page
    const savedTheme = localStorage.getItem('selected-theme') || 'light';
    applyTheme(savedTheme);

    // Écouteur d'événement sur le bouton
    themeButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });


    /* ==================== OMBRE SUR LE HEADER AU SCROLL ==================== */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    /* ==================== ANIMATION D'APPARITION AU SCROLL ==================== */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel: arrêter d'observer une fois l'élément visible
                revealObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
});