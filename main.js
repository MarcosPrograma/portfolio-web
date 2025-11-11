// Toggle menú hamburguesa
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Selección de elementos
const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-card');
const projectCardsContainer = document.querySelector('.project-cards');

// Evento para cada botón de filtro
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');

        // Actualizar estado visual del botón activo
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        let visibleCount = 0;

        // Mostrar / Ocultar tarjetas
        cards.forEach(card => {
            const cardCategories = card.dataset.category.split(" ");

            if (category === "todos" || cardCategories.includes(category)) {
                card.classList.remove('hide');
                visibleCount++;
            } else {
                card.classList.add('hide');
            }
        });

        // Fondo dinámico según cantidad visible
        if (visibleCount <= 2) {
            projectCardsContainer.style.minHeight = "450px";
        } else {
            projectCardsContainer.style.minHeight = "auto";
        }
    });
});
