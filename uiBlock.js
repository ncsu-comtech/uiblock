const uiBlock = (function () {

    let message = "Just a moment...";

    return {
        loadBlock: function() {
            const block = document.createElement("div");
            block.setAttribute("id", "blockoverlay");
            const msgblock = document.createElement("div");
            msgblock.setAttribute("id", "blockmsg");
            const msg = document.createElement("p");
            msg.innerText = message;
            msgblock.appendChild(msg);
            document.body.appendChild(block);
            document.body.appendChild(msgblock);
        },
        closeBlock: function() {
            const block = document.getElementById("blockoverlay");
            block.style.opacity = '0';
            block.addEventListener('transitionend', () => block.remove());
            const msg = document.getElementById("blockmsg");
            msg.style.opacity = '0';
            msg.addEventListener('transitionend', () => msg.remove());
        }
    }
    
})();