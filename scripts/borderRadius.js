
export const changeBorderRadius = (card, topLeft, topRight, bottomLeft, bottomRight) => {

    const $card = document.querySelector(card),
        $topLeft = document.getElementById(topLeft),
        $topRight = document.getElementById(topRight),
        $bottomLeft = document.getElementById(bottomLeft),
        $bottomRight = document.getElementById(bottomRight);

    //Top-left-border

    document.addEventListener('click', e => {
        if(e.target === $topLeft) {
            $card.style.setProperty('border-top-left-radius', `${$topLeft.value}px`); 
        }          
    })

    document.addEventListener('keyup', e => {
        if(e.target === $topLeft) {
            $card.style.setProperty('border-top-left-radius', `${$topLeft.value}px`);
        }   
    })

    // Top-right-border

    document.addEventListener('click', e => {
        if(e.target === $topRight) {
            $card.style.setProperty('border-top-right-radius', `${$topRight.value}px`); 
        }          
    })

    document.addEventListener('keyup', e => {
        if(e.target === $topRight){
            $card.style.setProperty('border-top-right-radius', `${$topRight.value}px`);
        }  
    })

    //bottom-left-border

    document.addEventListener('click', e => { 
        if(e.target === $bottomLeft) {
            $card.style.setProperty('border-bottom-left-radius', `${$bottomLeft.value}px`);
        }            
    })

    document.addEventListener('keyup', e => {
        if(e.target === $bottomLeft) {
            $card.style.setProperty('border-bottom-left-radius', `${$bottomLeft.value}px`);
        } 
    })

    //bottom-right-border

    document.addEventListener('click', e => {
        if(e.target === $bottomRight) {
            $card.style.setProperty('border-bottom-right-radius', `${$bottomRight.value}px`); 
        }         
    })

    document.addEventListener('keyup', e => {
        if(e.target === $bottomRight) {
            $card.style.setProperty('border-bottom-right-radius', `${$bottomRight.value}px`);
        }    
    })
}

   