
export const getControls = (btn1, btn2, btn3, content1, content2, content3) => {
    const $btnStructure = document.getElementById(btn1),
        $btnContent = document.getElementById(btn2),
        $btnColor = document.getElementById(btn3),
        $contenido1 = document.querySelector(content1),
        $contenido2 = document.querySelector(content2),
        $contenido3 = document.querySelector(content3);

    document.addEventListener('click', e => {
        if (e.target === $btnStructure) {
            $contenido2.style.setProperty('display', 'none');
            $contenido3.style.setProperty('display', 'none');
            $contenido1.style.setProperty('display', 'flex');
        } else if (e.target === $btnContent) {
            $contenido1.style.setProperty('display', 'none');
            $contenido3.style.setProperty('display', 'none');
            $contenido2.style.setProperty('display', 'flex');
        } else if (e.target === $btnColor) {
            $contenido1.style.setProperty('display', 'none');
            $contenido2.style.setProperty('display', 'none');
            $contenido3.style.setProperty('display', 'flex');
        }
    })
}