
export const insertingCssSimpleCard = (containerCode, inputTopLeft, inputTopRight, inputBottomLeft, inputBottomRight, colorShadow, horizontalShadow, verticalShadow, blurRadius, spreadRadius, bkgColor, paddingCard, titleInputInputColor, paragraphInputColor, linkInputColor, inputLink1, inputLink2) => {

    const $containerCode = document.querySelector(containerCode),
        $inputTopLeft = document.getElementById(inputTopLeft),
        $inputTopRight = document.getElementById(inputTopRight),
        $inputBottomLeft = document.getElementById(inputBottomLeft),
        $inputBottomRight = document.getElementById(inputBottomRight),
        $colorShadow = document.getElementById(colorShadow),
        $horizontalShadow = document.getElementById(horizontalShadow),
        $verticalShadow = document.getElementById(verticalShadow),
        $blurRadius = document.getElementById(blurRadius),
        $spreadRadius = document.getElementById(spreadRadius),
        $bkgColor = document.getElementById(bkgColor),
        $paddingCard = document.getElementById(paddingCard),
        $titleColor = document.getElementById(titleInputInputColor),
        $paragraphColor = document.getElementById(paragraphInputColor),
        $linkColor = document.getElementById(linkInputColor),
        $inputLink1 = document.getElementById(inputLink1),
        $inputLink2 = document.getElementById(inputLink2);

    let tDecoration = 'none';

    let cssCode = `.simple-card {
        width: 100%;
        max-width: 300px;
        border-radius: ${$inputTopLeft.value}px ${$inputTopRight.value}px ${$inputBottomRight.value}px ${$inputBottomLeft.value}px;
        box-shadow: ${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value};
        overflow: hidden;
        background-color: ${$bkgColor.value};
    }
    
    .img-container {
        width: 100%;   
    }
    
    .img-container img{
        width: 100%;  
    }
    
    .third-title {
        text-align: center;
        padding: ${$paddingCard.value}px;
        color: ${$titleColor.value};
    }
    
    .p-card {
        padding: ${$paddingCard.value}px;
        text-align: center;
        color: ${$paragraphColor.value};
    }
    
    .read-more {
        display: block;
        text-align: center;
        font-weight: 700;
        text-decoration: ${tDecoration};
        color: ${$linkColor.value};
        padding-bottom: 12px;
    }
    `;

    $containerCode.innerText = cssCode;

    // Para el evento input:
    document.addEventListener('input', e => {
        if (e.target === $inputBottomLeft || e.target === $inputBottomRight || e.target === $inputTopLeft || e.target === $inputTopRight || e.target === $colorShadow || e.target === $horizontalShadow || e.target === $verticalShadow || e.target === $blurRadius || e.target === $spreadRadius || e.target === $paddingCard || e.target === $titleColor || e.target === $paragraphColor || e.target === $linkColor || e.target === $bkgColor) {

            cssCode = `.simple-card {
                width: 100%;
                max-width: 300px;
                border-radius: ${$inputTopLeft.value}px ${$inputTopRight.value}px ${$inputBottomRight.value}px ${$inputBottomLeft.value}px;
                box-shadow: ${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value};
                overflow: hidden;
                background-color: ${$bkgColor.value};
            }
            
            .img-container {
                width: 100%;   
            }
            
            .img-container img{
                width: 100%;  
            }
            
            .third-title {
                text-align: center;
                padding: ${$paddingCard.value}px;
                color: ${$titleColor.value};
            }
            
            .p-card {
                padding: ${$paddingCard.value}px;
                text-align: center;
                color: ${$paragraphColor.value};
            }
            
            .read-more {
                display: block;
                text-align: center;
                font-weight: 700;
                text-decoration: ${tDecoration};
                color: ${$linkColor.value};
                padding-bottom: 12px;
            }
            `;
        
            $containerCode.innerText = cssCode;
        }
    })

    //Este código debe poder mejorarse, pero mientras tanto funciona asi para el textdecoration:
    document.addEventListener('input', e => {
        if (e.target === $inputLink1) {

            tDecoration = 'underline';

            cssCode = `.simple-card {
                width: 100%;
                max-width: 300px;
                border-radius: ${$inputTopLeft.value}px ${$inputTopRight.value}px ${$inputBottomRight.value}px ${$inputBottomLeft.value}px;
                box-shadow: ${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value};
                overflow: hidden;
                background-color: ${$bkgColor.value};
            }
            
            .img-container {
                width: 100%;   
            }
            
            .img-container img{
                width: 100%;  
            }
            
            .third-title {
                text-align: center;
                padding: ${$paddingCard.value}px;
                color: ${$titleColor.value};
            }
            
            .p-card {
                padding: ${$paddingCard.value}px;
                text-align: center;
                color: ${$paragraphColor.value};
            }
            
            .read-more {
                display: block;
                text-align: center;
                font-weight: 700;
                text-decoration: ${tDecoration};
                color: ${$linkColor.value};
                padding-bottom: 12px;
            }
            `;
        
            $containerCode.innerText = cssCode; 
        }
    })

    document.addEventListener('input', e => {
        if (e.target === $inputLink2) {

            tDecoration = 'none';

            cssCode = `.simple-card {
                width: 100%;
                max-width: 300px;
                border-radius: ${$inputTopLeft.value}px ${$inputTopRight.value}px ${$inputBottomRight.value}px ${$inputBottomLeft.value}px;
                box-shadow: ${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value};
                overflow: hidden;
                background-color: ${$bkgColor.value};
            }
            
            .img-container {
                width: 100%;   
            }
            
            .img-container img{
                width: 100%;  
            }
            
            .third-title {
                text-align: center;
                padding: ${$paddingCard.value}px;
                color: ${$titleColor.value};
            }
            
            .p-card {
                padding: ${$paddingCard.value}px;
                text-align: center;
                color: ${$paragraphColor.value};
            }
            
            .read-more {
                display: block;
                text-align: center;
                font-weight: 700;
                text-decoration: ${tDecoration};
                color: ${$linkColor.value};
                padding-bottom: 12px;
            }
            `;
        
            $containerCode.innerText = cssCode; 
        }
    })



}