// contacto.js - Manejo del formulario y envío a WhatsApp

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const messageEl = document.getElementById('form-message');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !apellidos || !direccion || !mensaje) {
            messageEl.textContent = 'Por favor, completa todos los campos.';
            messageEl.style.color = 'red';
            return;
        }

        // Construir mensaje para WhatsApp
        const texto = `Hola, soy ${nombre} ${apellidos}. Mi dirección: ${direccion}. Mensaje: ${mensaje}`;
        const url = `https://wa.me/5363200804?text=${encodeURIComponent(texto)}`;

        // Abrir WhatsApp en nueva pestaña
        window.open(url, '_blank');

        // Opcional: limpiar formulario
        form.reset();
        messageEl.textContent = 'Mensaje enviado. Gracias por contactarnos.';
        messageEl.style.color = 'green';
    });
});