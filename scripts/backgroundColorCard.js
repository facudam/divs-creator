
export const changeBackgroundColor = (card, inputColor) => {
    const $card = document.querySelector(card),
        $inputColor = document.getElementById(inputColor);

    document.addEventListener('input', e => {
        if(e.target === $inputColor) {
            $card.style.setProperty('background-color', $inputColor.value);
        }
    })
}