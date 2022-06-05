
export const changeTitleCard = ( textAreaTitle, titleCard ) => {
    const $textArea = document.getElementById(textAreaTitle),
        $titleCard = document.querySelector(titleCard);
    

    document.addEventListener('keyup', e => {
        if(e.target === $textArea) {
            $titleCard.innerHTML = `${$textArea.value}`;
        }
        
    })
}