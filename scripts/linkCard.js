
export const addLinkToCard = (cardImage, cardLink, inputLink) => {
    const $cardImage = document.getElementById(cardImage),
        $cardLink = document.getElementById(cardLink),
        $inputLink = document.getElementById(inputLink);

    $inputLink.addEventListener('change', e => {
        $cardImage.setAttribute('href', $inputLink.value);
        $cardLink.setAttribute('href', $inputLink.value);
    })     
    
}