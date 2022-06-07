
export const changeTextColor = ( idText, inputColor ) => {
    const $idText = document.getElementById(idText),
        $inputColor = document.getElementById(inputColor);

    document.addEventListener('input', e => {
        if (e.target === $inputColor) {
            $idText.style.setProperty('color', $inputColor.value);
        }
    })
}