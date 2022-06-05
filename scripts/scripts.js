import { changeBorderRadius } from "./borderRadius.js";
import { mostrarMenuNav } from "./botonMenu.js";
import { changeBoxShadow } from "./boxShadow.js";
import { addImageUrl } from "./imageUrl.js";
import { addLinkToCard } from "./linkCard.js";
import { changeTextPadding } from "./paddingTextsCard.js";
import { changeParagraphCard } from "./paragraphCard.js";
import { replaceTitleCard } from "./replaceTitle.js";
import { addTextDecoration } from "./textDecoration.js";
import { changeTextLinkCard } from "./textLink.js";
import { changeTitleCard } from "./titleCard.js";


document.addEventListener('DOMContentLoaded', e => {

    mostrarMenuNav('boton-hamburguesa', 'links-menu');

    replaceTitleCard('.img-container', 'third-title', 'h-title', 'third-title', 'third-title');
    
    changeBorderRadius('.simple-card','top-left', 'top-right', 'bottom-left', 'bottom-right');

    changeBoxShadow('.simple-card', 'color', 'horizontal-shadow', 'vertical-shadow', 'blur-radius', 'spread-radius');

    changeTextPadding('padding-texts', 'third-title', 'p-card');

    changeTitleCard('title-area', '.third-title');

    changeParagraphCard('paragraph-area', 'p-card');

    addLinkToCard('card-image', 'read-more', 'url-link');

    changeTextLinkCard('text-link','read-more');

    addTextDecoration('text-decoration-radio', 'disabled-radio', '.read-more');

    addImageUrl('url-image', 'image-card')
})


