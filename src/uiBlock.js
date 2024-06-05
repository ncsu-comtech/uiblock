(() => {
    let uiBlockElement = document.createElement('div');
    let uiBlockMessageElement = document.createElement('div');
    uiBlockElement.appendChild(uiBlockMessageElement);
    uiBlockElement.classList.add('ui-block');

    window.uiBlock = (options = {}) => {
        let parent = document.querySelector(options.selector) || document.body;
        console.log(parent);
        uiBlockMessageElement.innerHTML = options.text || 'Just a moment...';
        if (document.querySelector(options.selector)) {
            uiBlockElement.style.position = 'absolute';
        }
        parent.appendChild(uiBlockElement);
    }

    window.uiUnBlock = () => {
        let element = document.querySelector('.ui-block');
        if (element) {
            element.classList.add('ui-block-closing');
            setTimeout(() => {
                if (element) {
                    element.classList.remove('ui-block-closing');
                    element.parentElement.removeChild(element);
                }
            }, 250);
        }
    }
})();