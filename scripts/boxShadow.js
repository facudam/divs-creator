
export const changeColorShadow = (card, color) => {

    const $colorShadow = document.getElementById(color),
        $card = document.querySelector(card);
    console.log($colorShadow);

    $colorShadow.addEventListener('input', e => {
        $card.style.boxShadow = `1px 2px 10px 1px ${$colorShadow.value}`
    })

}