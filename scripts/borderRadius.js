
export const changeBorderRadius = (card, topLeft, topRight, bottomLeft, bottomRight) => {

    const $card = document.querySelector(card),
        $topLeft = document.getElementById(topLeft),
        $topRight = document.getElementById(topRight),
        $bottomLeft = document.getElementById(bottomLeft),
        $bottomRight = document.getElementById(bottomRight);

    //Top-left-border

    $topLeft.addEventListener('click', e => {   
        $card.style.setProperty('border-top-left-radius', `${$topLeft.value}px`);       
    })

    $topLeft.addEventListener('keyup', e => {
        $card.style.setProperty('border-top-left-radius', `${$topLeft.value}px`);
        
    })

    // Top-right-border

    $topRight.addEventListener('click', e => {   
        $card.style.setProperty('border-top-right-radius', `${$topRight.value}px`);       
    })

    $topRight.addEventListener('keyup', e => {
        $card.style.setProperty('border-top-right-radius', `${$topRight.value}px`);
        
    })

    //bottom-left-border

    $bottomLeft.addEventListener('click', e => {      
        $card.style.setProperty('border-bottom-left-radius', `${$bottomLeft.value}px`);       
    })

    $bottomLeft.addEventListener('keyup', e => {
        $card.style.setProperty('border-bottom-left-radius', `${$bottomLeft.value}px`);
        
    })

    //bottom-right-border

    $bottomRight.addEventListener('click', e => {   
        $card.style.setProperty('border-bottom-right-radius', `${$bottomRight.value}px`);       
    })

    $bottomRight.addEventListener('keyup', e => {
        $card.style.setProperty('border-bottom-right-radius', `${$bottomRight.value}px`);
        
    })
}

   