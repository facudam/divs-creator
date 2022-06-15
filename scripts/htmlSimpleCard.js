
export const insertingHtmlSimpleCard = (htmlPage, href, imageSrc, htag,  title, paragraph, readMore, inputTitle, inputParagraph, inputTextLink) => {

    //Declaración de variables del DOM:
    const htmlBox = document.querySelector(htmlPage),
        $href = document.getElementById(href),
        $imageSrc = document.getElementById(imageSrc),
        $htag = document.getElementById(htag),
        $title = document.getElementById(title),
        $paragraph = document.getElementById(paragraph),
        $readMore = document.getElementById(readMore);

    //Ahora vamos por los inputs para modificar el título, el parrafo y el text-link:

    const $inputTitle = document.getElementById(inputTitle),
        $inputParagraph = document.getElementById(inputParagraph),
        $inputTextLink = document.getElementById(inputTextLink);
    
    //A continuación creamos una variable con el contenido html-code para añadir a nuestro sitio web
    let html = `<div class="simple-card">
        <div class="img-container">
            <a href="${$href.value}" target="_blank" rel="noopener noreferrer"><img src="${$imageSrc.value}" alt=""></a>
            <${$htag.value} class="third-title">${$title.innerHTML}</${$htag.value}>
        </div>
        <p class="p-card">${$paragraph.innerHTML}</p>
        <a class="read-more" href="${$href.value}" target="_blank" rel="noopener noreferrer">${$readMore.innerHTML}</a>
    </div>
    `;

    //Añadimos el html-code dentro del contenedor establecido para éste:
    htmlBox.innerText = html;


    //Cuando haya cambios con el evento input actualizamos el html-code:
    document.addEventListener('input', e => {

        if (e.target === $href || e.target === $imageSrc || e.target === $htag) {
            html = `<div class="simple-card">
        <div class="img-container">
            <a href="${$href.value}" target="_blank" rel="noopener noreferrer"><img src="${$imageSrc.value}" alt=""></a>
            <${$htag.value} class="third-title">${$title.innerHTML}</${$htag.value}>
        </div>
        <p class="p-card">${$paragraph.innerHTML}</p>
        <a class="read-more" href="${$href.value}" target="_blank" rel="noopener noreferrer">${$readMore.innerHTML}</a>
    </div>
    `;

        htmlBox.innerText = html;
        }
          
     
    });

    //Cuando el evento keyup se active en los contenedores para el título, el parrafo y el text-link, volvemos a actualizar el html-code:
    document.addEventListener('keyup', e => {

        if (e.target === $inputTitle || e.target === $inputParagraph || e.target === $inputTextLink) {

            console.log('FUNCIONA EL KEYUP')

            html = `<div class="simple-card">
        <div class="img-container">
            <a href="${$href.value}" target="_blank" rel="noopener noreferrer"><img src="${$imageSrc.value}" alt=""></a>
            <${$htag.value} class="third-title">${$title.innerHTML}</${$htag.value}>
        </div>
        <p class="p-card">${$paragraph.innerHTML}</p>
        <a class="read-more" href="${$href.value}" target="_blank" rel="noopener noreferrer">${$readMore.innerHTML}</a>
    </div>
    `;

        htmlBox.innerText = html;
        
        }
          
     
    })
    
    
    
   
}





