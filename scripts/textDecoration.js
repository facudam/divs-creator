
export const addTextDecoration = ( textDecoration, none, textLink ) => {
    const $textDecorationInput = document.getElementById(textDecoration),
        $noneInput = document.getElementById(none),
        $textLink = document.querySelector(textLink);
    
    document.addEventListener('click', e => {
        if(e.target === $textDecorationInput){
            $noneInput.checked = false;
            $textLink.style.setProperty('text-decoration', 'underline');
            $textDecorationInput.checked = true;
        }
        
    })

    document.addEventListener('click', e => {
        if(e.target === $noneInput) {
            $textDecorationInput.checked = false;
            $textLink.style.setProperty('text-decoration', 'none');
            $noneInput.checked = true;
        }
        
    })
       
}