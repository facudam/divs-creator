// Esta función funciona únicamente si existe un elemento img en el html.

export const addImageUrl = (imageInput, imageCard) => {
    const $imageInput = document.getElementById(imageInput),
        $imageCard = document.getElementById(imageCard);
    document.addEventListener('input', (e) => {
        if(e.target === $imageInput) {
            $imageCard.setAttribute('src', $imageInput.value);
        }
    })
}