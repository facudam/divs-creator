
function showCssTopCard(topLeftB, topRightB, bottomLeftB, bottomRightB, horizontalShadow, verticalShadow, blurRadius, spreadRadius, colorShadow, paragrahHeight, titleColor, paragraphColor, backgroundColor) {
    return(`
.top-card {
    width: 100%;
    max-width: 300px;
    min-height: 150px;
    text-align: center;
    position: relative;
    padding: 20px;
    border-radius: ${topLeftB.value}px ${topRightB.value}px ${bottomLeftB.value}px ${bottomRightB.value}px;
    box-shadow:  ${horizontalShadow.value}px ${verticalShadow.value}px ${blurRadius.value}px ${spreadRadius.value}px ${colorShadow.value};
    background-color: ${backgroundColor.value};  
}

.top-card a {
    text-decoration: none;
}

.top-card__img {
    width: 220px;
    height: 150px;
    background-color: red;
    position: absolute;
    top: -30px;
    left: calc(50% - 110px);
    border-radius: 5px;
    overflow: hidden;
    transition: all .3s ease; 
}

.top-card__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
}

.top-card__content {
    margin-top: 110px;
    transition: all .3s ease;
}

.top-card__content__title {
    color: ${titleColor.value};
    font-weight: bolder;
    font-size: 21px;
}

.top-card__content__paragraph {
    color: ${paragraphColor.value};
    height: 0;
    overflow: hidden;
    transition: all .5s ease;
    font-size: 18px;
}

.top-card:hover .top-card__img{
    width: 260px;
    height: 175px;
    left: calc(50% - 130px);
}

.top-card:hover .top-card__content {
    margin-top: 135px;
}

.top-card:hover .top-card__content__paragraph {
    margin-top: 15px;
    height: ${paragrahHeight.value};  
    overflow: hidden; 
}
`
    )
}

export const insertingCssTopCard = (containerCode, topLeftB, topRightB, bottomLeftB, bottomRightB, horizontalShadow, verticalShadow, blurRadius, spreadRadius, colorShadow, paragrahHeight, titleColor, paragraphColor, backgroundColor ) => {
    const d = document;

    const $containerCode = d.getElementById(containerCode),
        $topLeftB = d.getElementById(topLeftB),
        $topRightB = d.getElementById(topRightB),
        $bottomLeftB = d.getElementById(bottomLeftB),
        $bottomRightB = d.getElementById(bottomRightB),
        $horizontalShadow = d.getElementById(horizontalShadow),
        $verticalShadow = d.getElementById(verticalShadow),
        $blurRadius = d.getElementById(blurRadius),
        $spreadRadius = d.getElementById(spreadRadius),
        $colorShadow = d.getElementById(colorShadow),
        $paragraphHeight = d.getElementById(paragrahHeight),
        $titleColor = d.getElementById(titleColor),
        $paragraphColor = d.getElementById(paragraphColor),
        $backgroundColor = d.getElementById(backgroundColor);

    $containerCode.innerHTML = showCssTopCard($topLeftB, $topRightB, $bottomLeftB, $bottomRightB, $horizontalShadow, $verticalShadow, $blurRadius, $spreadRadius, $colorShadow, $paragraphHeight, $titleColor, $paragraphColor, $backgroundColor)

    d.addEventListener('input', e => {
        if (e.target === $topLeftB || e.target === $topRightB || e.target === $bottomLeftB || e.target === $bottomRightB || e.target === $horizontalShadow || e.target === $verticalShadow || e.target === $blurRadius || e.target === $spreadRadius || e.target === $colorShadow || e.target === $paragraphHeight || e.target === $titleColor || e.target === $paragraphColor || e.target === $backgroundColor) {

            $containerCode.innerHTML = showCssTopCard($topLeftB, $topRightB, $bottomLeftB, $bottomRightB, $horizontalShadow, $verticalShadow, $blurRadius, $spreadRadius, $colorShadow, $paragraphHeight, $titleColor, $paragraphColor, $backgroundColor)
        }
    })
}