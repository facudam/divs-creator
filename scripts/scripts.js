import { changeBorderRadius } from "./borderRadius.js";
import { mostrarMenuNav } from "./botonMenu.js";
import { changeColorShadow } from "./boxShadow.js";


mostrarMenuNav('boton-hamburguesa', 'links-menu');

changeBorderRadius('.simple-card','top-left', 'top-right', 'bottom-left', 'bottom-right');

changeColorShadow('.simple-card', 'color');
