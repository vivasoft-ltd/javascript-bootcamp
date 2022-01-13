What will be the output we will get on the console if child div is clicked?
Why the output was like that?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Some css to identify the divs easily -->
    <style>
        div {
            border: 1px solid black;
        }
        #grandparent {
            background-color: green;
            width: 300px;
            height: 300px;
        }
        #parent {
            background-color: blue;
            width: 200px;
            height: 200px;
        }
        #child {
            background-color: red;
            width: 100px;
            height: 100px;
        }
    </style>
</head>
<body>
    <div id="grandparent">
        Grandparent
        <div id="parent">
            Parent
            <div id="child">
                Child
            </div>
        </div>
    </div>
    <script>
        const grandparent = document.getElementById("grandparent")
        const parent = document.getElementById("parent")
        const child = document.getElementById("child")
        // bubbling
        document.addEventListener("click", ()=> {
            console.log("Document clicked")
        }, false)
        // capturing
        grandparent.addEventListener("click", (e)=> {
            console.log("Grandparent clicked");
            e.stopPropagation()
        }, true)
        // bubbling
        parent.addEventListener("click", (e)=> {
            console.log("Parent clicked");
        }, true)
        // capturing
        child.addEventListener("click", (e)=> {
            console.log("Child clicked");
        }, false)
    </script>
</body>
</html>
```