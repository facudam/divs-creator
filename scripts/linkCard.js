
export const addLinkToCard = (cardLink, inputLink) => {
    const $cardLink = document.getElementById(cardLink),
        $inputLink = document.getElementById(inputLink);

    document.addEventListener('change', e => {
        if(e.target === $inputLink) {
            $cardLink.setAttribute('href', $inputLink.value);
        }
        
    })     
    
}