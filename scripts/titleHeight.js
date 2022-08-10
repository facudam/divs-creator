
/*
  NOTAS:
    La propiedad 'variable' hace referencia a una variable de medida en css.
    La propiedad 'valor' hace referencia a un tipo de valor para la variable previamente definida, como puede ser: px, %, cm, o demás.
*/

export const changeTitleHeight = (inputHeight, variable, valor) => {
    const $inputHeight = document.getElementById(inputHeight);
        

    document.addEventListener('input', e => {
        if (e.target === $inputHeight) {
            document.documentElement.style.setProperty(`${variable}`, `${$inputHeight.value}${valor}`);
        }
    })
}