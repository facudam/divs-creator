
export const changeBoxShadow = (card, color, horizontalShadow, verticalShadow, blurRadius, spreadRadius) => {

    const $colorShadow = document.getElementById(color),
        $card = document.querySelector(card),
        $horizontalShadow = document.getElementById(horizontalShadow),
        $verticalShadow = document.getElementById(verticalShadow),
        $blurRadius = document.getElementById(blurRadius),
        $spreadRadius = document.getElementById(spreadRadius);
        


    //color-shadow

    $colorShadow.addEventListener('input', e => {
        $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
    })

    // Horizontal-shadow

    $horizontalShadow.addEventListener('input', e => {
        console.log($horizontalShadow.value);
        $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
    })

    //Vertical-shadow

    $verticalShadow.addEventListener('input', e => {
        $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
    })

    //Blur-radius

    $blurRadius.addEventListener('input', e => {
        $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
    })

    //spread-radius

    $spreadRadius.addEventListener('input', e => {
        $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
    })

    
}