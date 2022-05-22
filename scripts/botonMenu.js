export function mostrarMenuNav(btnHamburger, linksMenu){
    const $hamburgerBoton = document.getElementById(btnHamburger),
        $navMenu = document.getElementById(linksMenu);


    $hamburgerBoton.addEventListener('click', (e) => {
    $navMenu.classList.toggle('activo');
});
}

