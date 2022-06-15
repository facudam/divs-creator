
export const mostrarCodigo = (codeContainer, codeButton) => {
    const $codeContainer = document.getElementById(codeContainer),
        $codeButton = document.getElementById(codeButton);

    document.addEventListener('click', e => {
        if (e.target === $codeButton) {
            $codeContainer.classList.toggle('mostrar-code');
        }
    })

}







