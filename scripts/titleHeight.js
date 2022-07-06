
export const changeTitleHeight = (container, inputHeight) => {
    const $inputHeight = document.getElementById(inputHeight),
        $container = document.querySelector(container);

    document.addEventListener('input', e => {
        if (e.target === $inputHeight) {
            document.documentElement.style.setProperty('--top-height', `${$inputHeight.value}%`);
        }
    })
}