
export const changeButtonSize = ( card, varButton, inputSize ) => {

    const $card = document.querySelector(card),
        $inputSize = document.getElementById(inputSize),
        $html = document.documentElement;

    document.addEventListener('input', e => {
        if ( e.target === $inputSize ) {
            $html.style.setProperty( varButton, `${$inputSize.value}px` );
        }
    })



}