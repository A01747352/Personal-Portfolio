// --- Lógica del Menú Móvil ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
});


// --- Lógica para el Botón "Back to Top" ---
const toTopButton = document.getElementById('to-top-button');

// Mostrar el botón cuando el usuario se desplaza hacia abajo
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.classList.remove('hidden');
    } else {
        toTopButton.classList.add('hidden');
    }
};

// Desplazar al inicio al hacer clic
toTopButton.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
});


// --- Lógica de Desplazamiento Suave (Smooth Scroll) para anclas en la misma página ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevenir el comportamiento por defecto solo si el ancla está en la página actual
        const currentPath = window.location.pathname.split('/').pop();
        const anchorPath = this.getAttribute('href').split('#')[0];
        
        if (anchorPath === '' || anchorPath === currentPath) {
            e.preventDefault();
            
            // Cerrar menú móvil si está abierto
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
            
            // Desplazamiento suave
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// --- Lógica para el Año Dinámico en el Copyright ---
const copyrightYearSpan = document.getElementById('copyright-year');
if (copyrightYearSpan) {
    copyrightYearSpan.textContent = new Date().getFullYear();
}