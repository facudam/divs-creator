
export const insertingHtmlFullCard = (htmlContainer, htitle, pTitle, hTag, hRef, link, inputTitle, inputParagraph, inputTextLink) => {

    const $htmlContainer = document.getElementById(htmlContainer),
        $hTitle = document.getElementById(htitle),
        $pTitle = document.getElementById(pTitle),
        $hTag = document.getElementById(hTag),
        $hRef = document.getElementById(hRef),
        $link = document.getElementById(link);


    const $inputTitle = document.getElementById(inputTitle),
        $inputParagraph = document.getElementById(inputParagraph),
        $inputTextLink = document.getElementById(inputTextLink);

    let html = `
<div class="full-card">
    <div class="absolute-container">
        <${$hTag.value} class="full-card__title">${ $hTitle.innerHTML }</${$hTag.value}>
        <p class="full-card__paragraph" >${ $pTitle.innerHTML }</p>
        <a class="full-card__a" href="${$hRef.value}" target="_blank" rel="noopener noreferrer">${$link.innerHTML}</a>
    </div>
</div>
    `;

    $htmlContainer.innerText = html;


    document.addEventListener('input', e => {
        if(e.target === $hRef || e.target === $hTag) {
            html = `
<div class="full-card">
    <div class="absolute-container">
        <${$hTag.value} class="full-card__title">${ $hTitle.innerHTML }</${$hTag.value}>
        <p class="full-card__paragraph" >${ $pTitle.innerHTML }</p>
        <a class="full-card__a" href="${$hRef.value}" target="_blank" rel="noopener noreferrer">${$link.innerHTML}</a>
    </div>
</div>
    `;

    $htmlContainer.innerText = html;
        }
    })

    document.addEventListener('keyup', e => {
        if (e.target === $inputTitle || e.target === $inputParagraph || e.target === $inputTextLink) {
            html = `
<div class="full-card">
    <div class="absolute-container">
        <${$hTag.value} class="full-card__title">${ $hTitle.innerHTML }</${$hTag.value}>
        <p class="full-card__paragraph" >${ $pTitle.innerHTML }</p>
        <a class="full-card__a" href="${$hRef.value}" target="_blank" rel="noopener noreferrer">${$link.innerHTML}</a>
    </div>
</div>
    `;

    $htmlContainer.innerText = html;
        }
    })
}