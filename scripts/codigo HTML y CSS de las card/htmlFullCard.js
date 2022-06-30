
export const insertingHtmlFullCard = (htmlContainer) => {

    const $htmlContainer = document.getElementById(htmlContainer);

    let html = `<div class="full-card">
    <div class="absolute-container">
        <h3 class="full-card__title">Lorem ipsum dolor sit amet consectetur.</h3>
        <p class="full-card__paragraph" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, blanditiis nisi! Harum inventore laudantium.</p>
        <a class="full-card__a" href="#" target="_blank" rel="noopener noreferrer">Explore</a>
    </div>
    `;

    $htmlContainer.innerText = html;
}