//Función a solucionar.
const d = document;

export const changeBackgroundGradient = (card, inputColor) => {

    const $card = d.querySelector(card),
        $inputColor = d.getElementById(inputColor);

    document.addEventListener('input', e => {
        if ( e.target === $inputColor ) {
            console.log($inputColor.value)
            $card.style.background = `linear-gradient(${$inputColor.value}), ${$inputColor.value}), 0.5)`
        }
        
    })

}








