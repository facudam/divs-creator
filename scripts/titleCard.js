
export const changeTitleCard = ( textAreaTitle, titleCard ) => {
    const $textArea = document.getElementById(textAreaTitle),
        $titleCard = document.getElementById(titleCard);

    $textArea.addEventListener('keyup', e => {
        $titleCard.innerHTML = `${$textArea.value}`;
    })
}