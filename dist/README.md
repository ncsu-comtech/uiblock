# uiBlock

A simple javascript based UI blocker to let users know they need to wait for a process to finish while disabling the user's ability to interact with the page.  This is useful for Ajax calls that may take some time to process.

Usage: Add an include or script tag to your project with appropriate path to uiBLock.js.  Then call the functions where necessary.

// add the ui block container and message
uiBlock.loadBlock();

// remove the ui block container and message
uiBlock.closeBlock();

Example JS code:
<script>
    const handleSubmit = (e) => {
        //////////////
        uiBlock.loadBlock();
        //////////////
        const data = new FormData(e.target);
        const dataentries = Object.fromEntries(data);
        let xhr = new XMLHttpRequest();
        let url = "{{ some path/url/route }}";
        xhr.open("PUT", url, true);
        xhr.setRequestHeader('X-CSRF-TOKEN', $('meta[name="csrf-token"]').attr('content'));
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(dataentries));
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //////////////
                uiBlock.closeBlock();
                //////////////
                let info = xhr.responseText;
                let container = document.getElementById("containerid");
                container.innerHtml = info;
            } else {
                // error messsage
            }
        };
    };

    CSS code: 
    #blockoverlay {
        z-index: 2000;
        border: none;
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        background-color: rgb(0, 0, 0);
        opacity: 0.6;
        cursor: wait;
        position: fixed;
        transition: opacity .5s;
    }
    #blockmsg {
        z-index: 2010;
        position: fixed;
        padding: 0px;
        margin: 0px;
        width: 30%;
        top: 40%;
        left: 35%;
        text-align: center;
        color: rgb(0, 0, 0);
        border: 0px;
        background-color: rgb(255, 255, 255);
        cursor: wait;
        border-radius: 10px;
        transition: opacity .5s;
    }
    #blockmsg p {
        font-size: 14px;
        padding: 20px;
        margin: 0;
        color: #000;
    }