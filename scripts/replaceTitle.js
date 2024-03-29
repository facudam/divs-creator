import { changeTextPadding } from "./paddingTextsCard.js";
import { changeTextColor } from "./textColor.js";
import { changeTitleCard } from "./titleCard.js";

export const replaceTitleCard = (parentNode, titleToReplace, inputTitle, classTitle, idTitle, inputColor, child) => {
    let titleH1, titleH2, titleH3, titleH4, titleH5, titleH6;
    const $inputTitle = document.getElementById(inputTitle),
        $titleToReplace = document.getElementById(titleToReplace),
        $parentNode = document.querySelector(parentNode),
        $inputColor = document.getElementById(inputColor);

    document.addEventListener('change', e => {
        if(e.target === $inputTitle) {
            console.log($inputTitle.value)

            switch ($inputTitle.value) {
                case 'h1':
                    titleH1 = document.createElement('h1');
                    titleH1.classList.add(classTitle);
                    titleH1.id = idTitle;
                    titleH1.style.color = $inputColor.value;//Esto es para que herede el color que tenga seleccionado el inputcolor
                    titleH1.innerHTML = `${$titleToReplace.innerHTML}`;
                    $parentNode.replaceChild(titleH1, $parentNode.children[child]);
                    break;
                case 'h2':
                    titleH2 = document.createElement('h2');
                    titleH2.classList.add(classTitle);
                    titleH2.id = idTitle;
                    titleH2.style.color = $inputColor.value;
                    titleH2.innerHTML = `${$titleToReplace.innerHTML}`;
                    $parentNode.replaceChild(titleH2, $parentNode.children[child]);
                    break;
                case 'h3':
                    titleH3 = document.createElement('h3');
                    titleH3.classList.add(classTitle);
                    titleH3.id = idTitle;
                    titleH3.style.color = $inputColor.value;
                    titleH3.innerHTML = `${$titleToReplace.innerHTML}`;
                    $parentNode.replaceChild(titleH3, $parentNode.children[child]);
                    break;
                    
                case 'h4':
                    titleH4 = document.createElement('h4');
                    titleH4.classList.add(classTitle);
                    titleH4.id = idTitle;
                    titleH4.style.color = $inputColor.value;
                    titleH4.innerHTML = `${$titleToReplace.innerHTML}`;
                    $parentNode.replaceChild(titleH4, $parentNode.children[child]);
                    break;
                case 'h5':
                    titleH5 = document.createElement('h5');
                    titleH5.classList.add(classTitle);
                    titleH5.id = idTitle;
                    titleH5.style.color = $inputColor.value;
                    titleH5.innerHTML = `${$titleToReplace.innerHTML}`;
                    $parentNode.replaceChild(titleH5, $parentNode.children[child]);
                    break;
                case 'h6':
                    titleH6 = document.createElement('h6');
                    titleH6.classList.add(classTitle);
                    titleH6.id = idTitle;
                    titleH6.style.color = $inputColor.value;
                    titleH6.innerHTML = `${$titleToReplace.innerHTML}`;
                    $parentNode.replaceChild(titleH6, $parentNode.children[child]);
                    break;
            }
            changeTextPadding('padding-texts', 'third-title', 'p-card');
            changeTitleCard('title-area', '.third-title');
            changeTextColor('third-title', 'title-color');

            changeTitleCard('title-area-full', '.full-card__title');
            changeTextColor('full-card__title', 'title-color-full' )

            changeTitleCard('title-area-top', '.top-card__content__title');
            changeTextColor('top-card-title', 'title-color-top')
        }
        
    })

    
}