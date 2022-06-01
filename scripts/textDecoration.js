
export const addTextDecoration = ( textDecoration, none, textLink ) => {
    const $textDecorationInput = document.getElementById(textDecoration),
        $noneInput = document.getElementById(none),
        $textLink = document.querySelector(textLink);
    
    $textDecorationInput.addEventListener('click', e => {
        $noneInput.checked = false;
        $textLink.style.setProperty('text-decoration', 'underline');
        $textDecorationInput.checked = true;
    })

    $noneInput.addEventListener('click', e => {
        $textDecorationInput.checked = false;
        $textLink.style.setProperty('text-decoration', 'none');
        $noneInput.checked = true;
    })
       
}