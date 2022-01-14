
How can we use only one addEventListener in this code to access any element?
Use Event Delegation to solve this.

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
        #box3 {
            height: 100px;
            width: 100px;
            background-color: blueviolet;
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
        <div id="box3">
            <button id="button3">Button 3</button>
        </div>
    </div>
</body>
</html>
```