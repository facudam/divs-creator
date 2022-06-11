import { changeTextColor } from "./textColor.js";

export const changeParagraphCard = (texAreaParagraph, paragraphCard) => {
    const $textAreaParagraph = document.getElementById(texAreaParagraph),
        $paragraphCard = document.getElementById(paragraphCard);

    document.addEventListener('keyup', e => {
        if(e.target === $textAreaParagraph) {
            $paragraphCard.innerHTML = `${$textAreaParagraph.value}`;
        }
        
    })

    changeTextColor('p-card', 'paragraph-color');
    
    
}