export function mostrarMenuNav(){
    const $hamburgerBoton = document.getElementById('boton-hamburguesa'),
        $navMenu = document.getElementById('links-menu');


    $hamburgerBoton.addEventListener('click', (e) => {
    $navMenu.classList.toggle('activo');
});
}

