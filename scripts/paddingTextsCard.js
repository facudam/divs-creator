
export const changeTextPadding = (paddingText, title, paragraph) => {
    const $paddingText = document.getElementById(paddingText),
        $title = document.getElementById(title),
        $paragraph = document.getElementById(paragraph);

    document.addEventListener('input', e => {
        if(e.target === $paddingText) {
            $title.style.padding = `${$paddingText.value}px`;
            $paragraph.style.padding = `${$paddingText.value}px`;;
        }
        

    })
    
}



