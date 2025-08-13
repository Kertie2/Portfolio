document.addEventListener('DOMContentLoaded', () => {

    /* ==================== CHANGEMENT DE THÈME (DARK/LIGHT MODE) ==================== */
    const themeButton = document.getElementById('theme-button');
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        themeButton.classList.toggle('fa-sun', theme === 'dark');
        themeButton.classList.toggle('fa-moon', theme === 'light');
        localStorage.setItem('selected-theme', theme);
    };

    const savedTheme = localStorage.getItem('selected-theme') || 'light';
    applyTheme(savedTheme);

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
    
});