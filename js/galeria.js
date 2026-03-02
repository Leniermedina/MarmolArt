// galeria.js - Carga de 20 imágenes para la galería
// Personaliza los nombres de archivo, títulos y categorías según tus imágenes

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    // Array con 20 trabajos. Por defecto se esperan imágenes en: images/galeria/trabajo1.jpg ... trabajo20.jpg
    const images = [];
    for (let i = 1; i <= 20; i++) {
        images.push({
            src: `images/galeria/trabajo${i}.jpg`,
            title: `Proyecto ${i}`,
            categoria: 'Mármol'
        });
    }

    // Si prefieres títulos personalizados, descomenta el bloque de abajo y ajusta:
    /*
    const images = [
        { src: 'images/galeria/piso1.jpg', title: 'Piso de mármol Carrara', categoria: 'Pisos' },
        { src: 'images/galeria/banio2.jpg', title: 'Baño con mármol Crema Marfil', categoria: 'Baños' },
        // ... hasta 20
    ];
    */

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

    // Opcional: lightbox simple (puedes implementarlo después)
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.querySelector('.overlay h3').textContent;
            console.log('Abrir imagen:', imgSrc, title);
        });
    });
});
