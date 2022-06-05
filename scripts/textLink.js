
export const changeTextLinkCard = ( inputTextLink, textLink ) => {
    const $inputTextLink = document.getElementById(inputTextLink),
        $textLink = document.getElementById(textLink);

   document.addEventListener('keyup', e => {
       if(e.target === $inputTextLink) {
           $textLink.innerHTML = $inputTextLink.value;
       }
       
   })
}