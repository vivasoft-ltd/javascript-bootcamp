Event delegation takes advantage of event propagation. 
It allows the event listener to be set on a parent element, 
thus avoiding adding event listeners to all the elements.

The event listener is set on a parent element which listens for click events.
If parent element is clicked, the callback will compare 
event.target (element which was clicked) against a common property.
This will be clear if we see the example below:

```html
<!DOCTYPE html>
<head>
    <title>Event Delegation and Propagation</title>
    <!-- some css styles to differentiate the elements -->
    <style>
        #box1 {
            height: 100px;
            width: 100px;
            background-color: chartreuse;
            padding: 30px;
        }
        #box2 {
            height: 100px;
            width: 100px;
            background-color: chocolate;
            padding: 30px;
        }
    </style>
</head>
<body>
    <div id="grid-container">
        <div id="box1">
            <button id="button1">Button 1</button>
        </div>
        <div id="box2">
            <button id="button2">Button 2</button>
        </div>
    </div>
    <script>
        document.querySelector("#grid-container").addEventListener("click", (e)=> {
            if(e.target.id === "box1"){
                console.log("Box 1 was clicked");
            }
            if(e.target.id === "box2"){
                console.log("Box 1 was clicked");
            }
            if(e.target.id === "button1"){
                console.log("button 1 was clicked");
            }
            if(e.target.id === "button2"){
                console.log("button 2 was clicked");
            }
        })
    </script>
</body>
</html>
```

When a button or element is clicked, 
the listener of the parent element catches the bubbling event.

If we click on Button 1, then the output will be:
button 1 was clicked
or if we click on the 'box1' div, output will be:
Box 1 was clicked

Here, using event delegation we dont need to add a 
click listener to every one of the elements like we saw 
in the previous topic. We just need to add a event listener
to the parent div and by using event bubbling formula, we can access
the clicked child element by using 'e.target'