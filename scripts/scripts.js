import { changeBorderRadius } from "./borderRadius.js";
import { mostrarMenuNav } from "./botonMenu.js";
import { changeBoxShadow } from "./boxShadow.js";
import { changeTextPadding } from "./paddingTextsCard.js";


mostrarMenuNav('boton-hamburguesa', 'links-menu');

changeBorderRadius('.simple-card','top-left', 'top-right', 'bottom-left', 'bottom-right');

changeBoxShadow('.simple-card', 'color', 'horizontal-shadow', 'vertical-shadow', 'blur-radius', 'spread-radius');

changeTextPadding('padding-texts', 'third-title', 'p-card');

