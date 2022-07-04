
export const insertinCssFullCard = (containerCode, urlImage, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius, horizontalShadow, verticalShadow, blurRadius, spreadRadius, colorShadow, titleColor, paragraphColor, linkColor, buttonColor, buttonSize) => {

    const $containerCode = document.getElementById(containerCode),
        $urlImage = document.getElementById(urlImage),
        $topLeftRadius = document.getElementById(topLeftRadius),
        $topRightRadius = document.getElementById(topRightRadius),
        $bottomLeftRadius = document.getElementById(bottomLeftRadius),
        $bottomRightRadius = document.getElementById(bottomRightRadius),
        $horizontalShadow = document.getElementById(horizontalShadow),
        $verticalShadow = document.getElementById(verticalShadow),
        $blurRadius = document.getElementById(blurRadius),
        $spreadRadius = document.getElementById(spreadRadius),
        $colorShadow = document.getElementById(colorShadow),
        $titleColor = document.getElementById(titleColor),
        $paragraphColor = document.getElementById(paragraphColor),
        $linkColor = document.getElementById(linkColor),
        $buttonColor = document.getElementById(buttonColor),
        $buttonSize = document.getElementById(buttonSize);

    let css = `.full-card {
        width: 100%;
        max-width: 280px;
        height: 400px;
        overflow: hidden;
        position: relative;
        box-shadow: ${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value};
        background: linear-gradient(rgba(51, 51, 56,.5), rgba(51, 51, 56,.5)), url(${$urlImage.value});
        background-size: cover;
        background-position: center;
        letter-spacing: 1px;
        border-radius: ${$topLeftRadius.value}px ${$topRightRadius.value}px ${$bottomRightRadius.value}px ${$bottomLeftRadius.value}px;
        
    }
    
    .absolute-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 78%;
        transition: top .3s ease;
    }
    
    .full-card__title {
        text-align: center;
        color: ${$titleColor.value};
        text-shadow: 1px 1px 2px #141414;
        font-family: 'Akshar', sans-serif;
        font-size: 22px;
        margin: 10px;
    }
    
    .full-card__paragraph {
        color: ${$paragraphColor.value};
        text-align: center;
        line-height: 25px;
        text-shadow: 1px 1px 2px #141414;
        font-weight: 900;
        font-style: italic;
        margin: 10px;
    }
    
    .full-card__a {
        color: ${$linkColor.value};
        background-color: ${$buttonColor.value};
        width: ${$buttonSize.value}px;
        text-align: center;
        font-weight: 900;
        padding: 10px 0px;
        text-decoration: none;
        transition: bottom .3s ease;
        cursor: pointer;
        border-radius: 10px 10px 10px 10px;
        margin: 17px;
    }
    
    .full-card:hover .absolute-container {
        top: 20%;
    }
    `;

    $containerCode.innerText = css;


    document.addEventListener('input', e => {
        if (e.target === $urlImage || e.target === $topLeftRadius || e.target === $topRightRadius || e.target === $bottomLeftRadius || e.target === $bottomRightRadius || e.target === $horizontalShadow || e.target === $verticalShadow || e.target === $blurRadius || e.target === $spreadRadius || e.target === $colorShadow || e.target === $titleColor || e.target === $paragraphColor || e.target === $linkColor || e.target === $buttonColor || e.target === $buttonSize){
            css = `.full-card {
                width: 100%;
                max-width: 280px;
                height: 400px;
                overflow: hidden;
                position: relative;
                box-shadow: ${$horizontalShadow.value}px ${$verticalShadow.value}px ${$blurRadius.value}px ${$spreadRadius.value}px ${$colorShadow.value};
                background: linear-gradient(rgba(51, 51, 56,.5), rgba(51, 51, 56,.5)), url(${$urlImage.value});
                background-size: cover;
                background-position: center;
                letter-spacing: 1px;
                border-radius: ${$topLeftRadius.value}px ${$topRightRadius.value}px ${$bottomRightRadius.value}px ${$bottomLeftRadius.value}px;
                
            }
            
            .absolute-container {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                top: 78%;
                transition: top .3s ease;
            }
            
            .full-card__title {
                text-align: center;
                color: ${$titleColor.value};
                text-shadow: 1px 1px 2px #141414;
                font-family: 'Akshar', sans-serif;
                font-size: 22px;
                margin: 10px;
            }
            
            .full-card__paragraph {
                color: ${$paragraphColor.value};
                text-align: center;
                line-height: 25px;
                text-shadow: 1px 1px 2px #141414;
                font-weight: 900;
                font-style: italic;
                margin: 10px;
            }
            
            .full-card__a {
                color: ${$linkColor.value};
                background-color: ${$buttonColor.value};
                width: ${$buttonSize.value}px;
                text-align: center;
                font-weight: 900;
                padding: 10px 0px;
                text-decoration: none;
                transition: bottom .3s ease;
                cursor: pointer;
                border-radius: 10px 10px 10px 10px;
                margin: 17px;
            }
            
            .full-card:hover .absolute-container {
                top: 20%;
            }
            `;
        
            $containerCode.innerText = css;
        }
    })
}