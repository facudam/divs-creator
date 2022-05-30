
export const changeTextPadding = (paddingText, title, paragraph) => {
    const $paddingText = document.getElementById(paddingText),
        $title = document.getElementById(title),
        $paragraph = document.getElementById(paragraph);

    $paddingText.addEventListener('input', e => {
        $title.style.padding = `${$paddingText.value}px`;
        $paragraph.style.padding = `0 ${paddingText.value}px ${paddingText.value}px ${paddingText.value}px`;

    })
    
}



