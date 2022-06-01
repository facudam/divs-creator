
export const changeParagraphCard = (texAreaParagraph, paragraphCard) => {
    const $textAreaParagraph = document.getElementById(texAreaParagraph),
        $paragraphCard = document.getElementById(paragraphCard);

    $textAreaParagraph.addEventListener('keyup', e => {
        $paragraphCard.innerHTML = `${$textAreaParagraph.value}`;
    })
}