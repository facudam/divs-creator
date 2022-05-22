export function mostrarMenuNav(btnHamburguer, linksMenu){
    const $hamburgerBoton = document.getElementById(btnHamburguer),
        $navMenu = document.getElementById(linksMenu);


    $hamburgerBoton.addEventListener('click', (e) => {
    $navMenu.classList.toggle('activo');
});
}

