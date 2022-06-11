
export const insertingCssSimpleCard = (containerCode) => {

    const $containerCode = document.querySelector(containerCode);

    let cssCode = `.simple-card {
        width: 100%;
        max-width: 300px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 1px 2px 10px 1px #808080;
        overflow: hidden;
        background-color: inherit;
    }
    
    .img-container {
        width: 100%;   
    }
    
    .img-container img{
        width: 100%;  
    }
    
    .third-title {
        text-align: center;
        padding: 12px;
        color: #000;
    }
    
    .p-card {
        padding: 0 12px 12px 12px;
        text-align: center;
    }
    
    .read-more {
        display: block;
        text-align: center;
        font-weight: 700;
        text-decoration: none;
        color: #0f7abe;
        padding-bottom: 12px;
    }
    `;

    $containerCode.innerText = cssCode;
}