const $hamburgerBoton = document.getElementById('boton-hamburguesa'),
    $navMenu = document.getElementById('links-menu');


function mostrarMenuNav(){
   $navMenu.classList.toggle('activo');
}

$hamburgerBoton.addEventListener('click', mostrarMenuNav);