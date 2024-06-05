# uiBlock

A simple javascript based UI blocker to let users know they need to wait for a process to finish while disabling the user's ability to interact with the page.  This is useful for Ajax calls that may take some time to process.

Usage: Import uiBlock.js and uiBlock.css into your project.

// add the ui block container and message
uiBlock();

// remove the ui block container and message
uiUnBlock();

Example:
```javascript
<script>
    import "uiBlock.js";
    import "uiBlock.css";

    const myAction = (() => {
        uiBlock();
        // ... long running action
        uiUnBlock();
    });
</script>

<button type="button" onClick="myAction()">Action</button>
```

Example with custom text:
```javascript
    uiBlock({text: 'Processing...'});
```
