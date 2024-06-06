const UiBlock = (() => {
    window.uiBlock = (options = {}) => {
        let parent = document.querySelector(options.selector) || document.body;
        const block = document.createElement("div");
        block.setAttribute("id", "ui-block");
        const msgblock = document.createElement("div");
        msgblock.setAttribute("id", "ui-block-msg");
        const msg = document.createElement("p");
        msg.innerText = options.text || 'Just a moment...';
        msgblock.appendChild(msg);
        parent.appendChild(block);
        parent.appendChild(msgblock);
    }

    window.uiUnBlock = () => {
        const block = document.getElementById("ui-block");
        block.style.opacity = '0';
        block.addEventListener('transitionend', () => block.remove());
        const msg = document.getElementById("ui-block-msg");
        msg.style.opacity = '0';
        msg.addEventListener('transitionend', () => msg.remove());
    }
})();

export default {UiBlock};
