export function mostrarMenuNav(btnHamburger, linksMenu){
    
    document.addEventListener('click', (e) => {
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`)) {
            document.querySelector(linksMenu).classList.toggle('activo');
        }
    });
}

