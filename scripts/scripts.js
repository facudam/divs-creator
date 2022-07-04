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
import { changeButtonSize } from "./buttonSize.js";
import { changeBackgroundImage } from "./backgroundImageCard.js";
import { changeBackgroundGradient } from "./backgroundGradient.js";
import { insertingHtmlFullCard } from "./codigo HTML y CSS de las card/htmlFullCard.js";
import { insertinCssFullCard } from "./codigo HTML y CSS de las card/cssFullCard.js";



document.addEventListener('DOMContentLoaded', e => {

    mostrarMenuNav('#boton-hamburguesa', '#links-menu');

    getControls('structure', 'content', 'color', '.structure-styles', '.content-styles', '.colors-styles');

    replaceTitleCard('.img-container', 'third-title', 'h-title', 'third-title', 'third-title', 'title-color', 1);
    
    changeBorderRadius('.simple-card','top-left', 'top-right', 'bottom-left', 'bottom-right');

    changeBoxShadow('.simple-card', 'color-shadow', 'horizontal-shadow', 'vertical-shadow', 'blur-radius', 'spread-radius');

    changeTextPadding('padding-texts', 'third-title', 'p-card');

    changeTitleCard('title-area', '.third-title');

    changeParagraphCard('paragraph-area', 'p-card');

    addLinkToCard('card-image', 'url-link');

    addLinkToCard('read-more', 'url-link');

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
    mostrarCodigo('#simple-card-code', '#show-code', 'p-title-simple-card', 'simple-card-arrow');

    

    // +++++++++++++ FULL-CARD FUNCIONES ++++++++++++++ //

    replaceTitleCard('.absolute-container', 'full-card__title', 'h-title-full', 'full-card__title', 'full-card__title', 'title-color-full', 0)

    changeBorderRadius('.full-card', 'top-left-full', 'top-right-full', 'bottom-left-full', 'bottom-right-full');

    changeBoxShadow('.full-card', 'color-shadow-full', 'horizontal-shadow-full', 'vertical-shadow-full', 'blur-radius-full', 'spread-radius-full');

    changeButtonSize('.full-card', '--button-size-full', 'button-size-full')

    getControls('structure-full', 'content-full', 'color-full', '.structure-styles-full', '.content-styles-full', '.colors-styles-full');

    changeTitleCard('title-area-full', '.full-card__title');
    changeParagraphCard('paragraph-area-full', 'paragraph-full')

    changeTextLinkCard('area-text-link-full', 'text-link-full');

    changeBackgroundImage('.full-card', 'url-image-full');

    addLinkToCard('text-link-full', 'url-link-full');

    changeTextColor('full-card__title', 'title-color-full')

    changeTextColor('paragraph-full', 'paragraph-color-full')

    changeTextColor('text-link-full', 'link-color-full');

    changeBackgroundColor('#text-link-full', 'button-card-full')

    insertingHtmlFullCard('html-full-card', 'full-card__title', 'paragraph-full', 'h-title-full', 'url-link-full', 'text-link-full', 'title-area-full', 'paragraph-area-full', 'area-text-link-full');

    insertinCssFullCard('css-full-card', 'url-image-full', 'top-left-full', 'top-right-full', 'bottom-right-full', 'bottom-left-full', 'horizontal-shadow-full', 'vertical-shadow-full', 'blur-radius-full', 'spread-radius-full', 'color-shadow-full', 'title-color-full', 'paragraph-color-full', 'link-color-full', 'button-card-full', 'button-size-full');

    mostrarCodigo('#full-card-code', '#full-show-code', 'p-title-full-card', 'full-card-arrow')

   
})


