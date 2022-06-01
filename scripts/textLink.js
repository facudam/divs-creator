
export const changeTextLinkCard = ( inputTextLink, textLink ) => {
    const $inputTextLink = document.getElementById(inputTextLink),
        $textLink = document.getElementById(textLink);

   $inputTextLink.addEventListener('keyup', e => {
       $textLink.innerHTML = $inputTextLink.value;
   })
}