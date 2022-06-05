export function mostrarMenuNav(btnHamburger, linksMenu){
    const $hamburgerBoton = document.getElementById(btnHamburger),
        $navMenu = document.getElementById(linksMenu);


    document.addEventListener('click', (e) => {
        if(e.target === $hamburgerBoton) {
            $navMenu.classList.toggle('activo');
        }
    });
}

