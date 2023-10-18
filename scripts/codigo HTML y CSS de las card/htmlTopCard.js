
function ShowTopHTML(hRef, imageSrc, hTag, title, paragraph) {
    return(`
<div class="top-card">
    <a href=${ hRef.value } target="_blank" rel="noopener noreferrer">
        <div class="top-card__img">
            <img src=${imageSrc.value} alt="image">
        </div>
        <div class="top-card__content">
            <${hTag.value} class="top-card__content__title">${title.innerHTML}</${hTag.value}>
            <div class="top-card__content__paragraph">
                <p>${paragraph.innerHTML}</p>
            </div>   
        </div>
    </a>    
</div>
`)
} 

export const insertingHtmlTopCard = (hRef, imageSrc, hTag, inputTitle, inputParagraph, htmlContainer, title, paragraph ) => {
    const d = document;

    const $hRef = d.getElementById(hRef),
        $imageSrc = d.getElementById(imageSrc),
        $hTag = d.getElementById(hTag),
        $inputTitle = d.getElementById(inputTitle),
        $inputParagraph = d.getElementById(inputParagraph),
        $htmlContainer = d.getElementById(htmlContainer),
        $title = d.getElementById(title),
        $paragraph = d.getElementById(paragraph);


    $htmlContainer.innerText = ShowTopHTML($hRef, $imageSrc, $hTag, $title, $paragraph);

    document.addEventListener('input', e => {
        if (e.target === $hRef || e.target === $hTag  ) {
            $htmlContainer.innerHTML = ShowTopHTML($hRef, $imageSrc, $hTag, $title, $paragraph);
        }
    })

    document.addEventListener('keyup', e => {
        if (e.target === $imageSrc || e.target === $inputTitle || e.target === $inputParagraph) {
            $htmlContainer.innerHTML = ShowTopHTML($hRef, $imageSrc, $hTag, $title, $paragraph);
        }
    })
}