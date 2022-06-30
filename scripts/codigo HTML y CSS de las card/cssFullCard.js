
export const insertinCssFullCard = (containerCode) => {

    const $containerCode = document.getElementById(containerCode);

    let css = `.full-card {
        width: 100%;
        max-width: 280px;
        height: 400px;
        overflow: hidden;
        position: relative;
        box-shadow: 0px 0px 1px 1px #142d49;
        background: linear-gradient(rgba(51, 51, 56,.5), rgba(51, 51, 56,.5)), url('https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844226__340.png');
        background-size: cover;
        background-position: center;
        letter-spacing: 1px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        
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
        color: rgb(255, 255, 255);
        text-shadow: 1px 1px 2px #141414;
        font-family: 'Akshar', sans-serif;
        font-size: 22px;
        margin: 10px;
    }
    
    .full-card__paragraph {
        color: #fff;
        text-align: center;
        line-height: 25px;
        text-shadow: 1px 1px 2px #141414;
        font-weight: 900;
        font-style: italic;
        margin: 10px;
    }
    
    .full-card__a {
        color: rgb(255, 255, 255);
        background-color: #0f7abe;
        width: var(--button-size-full);
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