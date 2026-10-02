document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btn-abrir');
    const seccionInicio = document.getElementById('inicio');
    const seccionDetalles = document.getElementById('detalles'); // Capturamos la sección de la invitación
    
    // Verificamos que los elementos existan para evitar errores
    if (btnAbrir && seccionInicio) {
        btnAbrir.addEventListener('click', () => {
            // Activa la animación CSS de las cortinas
            seccionInicio.classList.add('abierta');
            
            // Esperamos 1.5s (lo que dura la apertura de las puertas)
            setTimeout(() => {
                // Ocultamos la sección inicial
                seccionInicio.style.display = 'none';
                
                // Quitamos el efecto blur de la sección de detalles
                if (seccionDetalles) {
                    seccionDetalles.classList.remove('efecto-blur');
                }
            }, 1500); 
        });
    }
});