//Aún debo agregar los gradientes para la card.
export const changeBackgroundImage = (card, inputUrl) => {
    const $card = document.querySelector(card),
        $inputUrl = document.getElementById(inputUrl);

    document.addEventListener('input', e => {
        if ( e.target === $inputUrl ) {
            $card.style.background = `linear-gradient(rgba(51, 51, 56, 0.5), rgba(51, 51, 56, 0.5)), url(${$inputUrl.value}`;
        }
    })
}















