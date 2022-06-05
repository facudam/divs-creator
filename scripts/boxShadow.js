
export const changeBoxShadow = (card, color, horizontalShadow, verticalShadow, blurRadius, spreadRadius) => {

    const $colorShadow = document.getElementById(color),
        $card = document.querySelector(card),
        $horizontalShadow = document.getElementById(horizontalShadow),
        $verticalShadow = document.getElementById(verticalShadow),
        $blurRadius = document.getElementById(blurRadius),
        $spreadRadius = document.getElementById(spreadRadius);
        


    //color-shadow

    document.addEventListener('input', e => {
        if(e.target === $colorShadow) {
            $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
        }
    })

    // Horizontal-shadow

    document.addEventListener('input', e => {
        if(e.target === $horizontalShadow) {
            $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
        }
    })

    //Vertical-shadow

    document.addEventListener('input', e => {
        if(e.target === $verticalShadow) {
            $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
        } 
    })

    //Blur-radius

    document.addEventListener('input', e => {
        if(e.target === $blurRadius) {
            $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
        }
    })

    //spread-radius

    document.addEventListener('input', e => {
        if(e.target === $spreadRadius) {
            $card.style.boxShadow = `${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value}`;
        }
    })

    
}