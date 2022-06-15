import { changeBackgroundColor } from "./backgroundColorCard.js";
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
import { changeTextColor } from "./textColor.js";
import { getControls } from "./stylesButtons.js";
import { insertingHtmlSimpleCard } from "./htmlSimpleCard.js";
import { insertingCssSimpleCard } from "./cssSimpleCard.js";
import { mostrarCodigo } from "./mostrarCodigo.js";


document.addEventListener('DOMContentLoaded', e => {

    mostrarMenuNav('boton-hamburguesa', 'links-menu');

    getControls('structure', 'content', 'color', '.structure-styles', '.content-styles', '.colors-styles');

    replaceTitleCard('.img-container', 'third-title', 'h-title', 'third-title', 'third-title', 'title-color');
    
    changeBorderRadius('.simple-card','top-left', 'top-right', 'bottom-left', 'bottom-right');

    changeBoxShadow('.simple-card', 'color-shadow', 'horizontal-shadow', 'vertical-shadow', 'blur-radius', 'spread-radius');

    changeTextPadding('padding-texts', 'third-title', 'p-card');

    changeTitleCard('title-area', '.third-title');

    changeParagraphCard('paragraph-area', 'p-card');

    addLinkToCard('card-image', 'read-more', 'url-link');

    changeTextLinkCard('text-link','read-more');

    addTextDecoration('text-decoration-radio', 'disabled-radio', '.read-more');

    addImageUrl('url-image', 'image-card');

    changeBackgroundColor('.simple-card', 'background-color-card');

    changeTextColor('third-title', 'title-color');

    changeTextColor('p-card', 'paragraph-color');

    changeTextColor('read-more', 'link-color');


    // Agregando el codigo html de simple-card en index.html
    insertingHtmlSimpleCard('.html-inserted', 'url-link', 'url-image', 'h-title', 'third-title', 'p-card', 'read-more', 'title-area', 'paragraph-area', 'text-link');
    // Agrengando css de simple card:
    insertingCssSimpleCard('.css-inserted', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'color-shadow', 'horizontal-shadow', 'vertical-shadow', 'blur-radius', 'spread-radius', 'background-color-card', 'padding-texts', 'title-color', 'paragraph-color', 'link-color', 'text-decoration-radio', 'disabled-radio');

    // Botón mostrar codigo:
    mostrarCodigo('simple-card-code', 'show-code')
})


