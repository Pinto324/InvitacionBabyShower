document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btn-abrir');
    const seccionInicio = document.getElementById('inicio');
    const seccionDetalles = document.getElementById('detalles');
    
    // Elementos de música
    const musicaFondo = document.getElementById('musica-fondo');
    const btnMusica = document.getElementById('btn-musica');
    const svgSonido = document.getElementById('svg-sonido');
    const svgMute = document.getElementById('svg-mute');
    
    let reproduciendo = false;

    if (btnAbrir && seccionInicio) {
        btnAbrir.addEventListener('click', () => {
            // Animación
            seccionInicio.classList.add('abierta');
            
            // Iniciar música automáticamente al abrir
            if(musicaFondo) {
                musicaFondo.play().then(() => {
                    reproduciendo = true;
                    btnMusica.style.display = 'flex'; // Muestra el botón flotante
                }).catch(error => {
                    console.log("El navegador bloqueó el autoplay", error);
                    btnMusica.style.display = 'flex';
                });
            }
            
            setTimeout(() => {
                seccionInicio.style.display = 'none';
                if (seccionDetalles) {
                    seccionDetalles.classList.remove('efecto-blur');
                }
            }, 1500); 
        });
    }

    // Control del botón flotante Play/Pause
    if (btnMusica) {
        btnMusica.addEventListener('click', () => {
            if (reproduciendo) {
                musicaFondo.pause();
                // Ocultar icono de sonido, mostrar mute
                svgSonido.style.display = 'none';
                svgMute.style.display = 'block';
                reproduciendo = false;
            } else {
                musicaFondo.play();
                // Ocultar mute, mostrar icono de sonido
                svgSonido.style.display = 'block';
                svgMute.style.display = 'none';
                reproduciendo = true;
            }
        });
    }
});