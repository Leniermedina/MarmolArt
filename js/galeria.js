// galeria.js - Carga dinámica de imágenes en la galería

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    // Aquí puedes definir un array con las rutas de tus imágenes y títulos
    // Por simplicidad, generaremos 12 elementos de ejemplo
    const images = [
        { src: 'images/galeria/trabajo1.jpg', title: 'Piso de mármol', categoria: 'pisos' },
        { src: 'images/galeria/trabajo2.jpg', title: 'Baño con mármol', categoria: 'banos' },
        { src: 'images/galeria/trabajo3.jpg', title: 'Meseta de cocina', categoria: 'mesetas' },
        { src: 'images/galeria/trabajo4.jpg', title: 'Revestimiento de pared', categoria: 'revestimientos' },
        { src: 'images/galeria/trabajo5.jpg', title: 'Escalera de mármol', categoria: 'escaleras' },
        { src: 'images/galeria/trabajo6.jpg', title: 'Mesa de centro', categoria: 'mesetas' },
        { src: 'images/galeria/trabajo7.jpg', title: 'Baño de lujo', categoria: 'banos' },
        { src: 'images/galeria/trabajo8.jpg', title: 'Piso de entrada', categoria: 'pisos' },
        { src: 'images/galeria/trabajo9.jpg', title: 'Encimera de baño', categoria: 'mesetas' },
        { src: 'images/galeria/trabajo10.jpg', title: 'Detalle de veta', categoria: 'detalles' },
        { src: 'images/galeria/trabajo11.jpg', title: 'Columna de mármol', categoria: 'columnas' },
        { src: 'images/galeria/trabajo12.jpg', title: 'Fuente de jardín', categoria: 'exteriores' }
    ];

    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="overlay">
                <h3>${img.title}</h3>
                <p>${img.categoria}</p>
            </div>
        `;
        galleryGrid.appendChild(item);
    });

    // Opcional: lightbox simple al hacer clic
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('.overlay h3').textContent;
            // Podrías abrir un modal, pero por ahora solo console.log
            console.log('Abrir imagen:', imgSrc, title);
            // Aquí puedes implementar un lightbox sencillo
        });
    });
});