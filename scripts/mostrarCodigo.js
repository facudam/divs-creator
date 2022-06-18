
export const mostrarCodigo = (codeContainer, codeButton, pTitle, span) => {
    const $codeContainer = document.getElementById(codeContainer),
        $codeButton = document.getElementById(codeButton),
        $pTitle = document.getElementById(pTitle),
        $span = document.getElementById(span),
        $html = document.documentElement;

    let arrowChanged = false;
    let ancho = window.innerWidth;
 
    // Con esta función modificamos la propiedad height -desde una variable- de la clase 'mostrar-code', si el ancho del viewport es menor a 965px la altura será 500px y sino 250px.
    const pantallaMostrarCode = () => {
    if ( ancho < 965 ) {

        $html.style.setProperty('--mostrar-code', '500px')
        } else {
            $html.style.setProperty('--mostrar-code', '250px')
            }
    } 
    
    pantallaMostrarCode()

    //Llamamos al evento resize para modificar la propiedad de la clase 'mostrar-code' según haya un cambio en la medida del viewport.
    window.addEventListener('resize', e => {
        ancho = window.innerWidth;

        pantallaMostrarCode();
    });
    
    // ++++++++++++++++++++++++++++++++++++++++ //

    document.addEventListener('click', e => {
        if (e.target === $codeButton) {
            $codeContainer.classList.toggle('mostrar-code');

            if ( arrowChanged === false) {
            $pTitle.innerHTML = 'Hide code';
            $span.innerHTML = '↑'
            arrowChanged = true;
            } else {
            $pTitle.innerHTML = 'Get code';
            $span.innerHTML = '↓'
            arrowChanged = false;
            }
        }

        
    })

    

}







