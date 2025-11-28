$(function() {
    const $imagenes = $('.bannerimg'); 
    let indiceActual = 0;
    const tiempoIntervalo = 3000; 
    function mostrarSiguiente() {
        $imagenes.removeClass('active');
        indiceActual = (indiceActual + 1) % $imagenes.length;
        $imagenes.eq(indiceActual).addClass('active');
    }
    setInterval(mostrarSiguiente, tiempoIntervalo);
});