// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');

    // Función para scroll suave al hacer clic en los enlaces de navegación
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste opcional para compensar el header fijo
                    behavior: 'smooth'
                });

                // Añadir clase activa al enlace actual y removerla de los demás
                links.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
