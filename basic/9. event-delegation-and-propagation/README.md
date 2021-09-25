# Event delegation and propagation

## Event Propagation
### _What is event propagation?_
> Event Propagation is a way of defining how events travel through the DOM tree to arrive at its target.

_**Example 1:**_

```html
<html>
  <body>
    <div id="button-container">
      <button class="button">Click me</button>
    </div>
  </body>
</html>
```
When a user clicks on the button, this click event travels through the whole dom tree and reach it's target `<button>` and fires the event.
## _How does event propagation work?_

Event propagates in 3 phases. They are:
1. **Capture Phase:** It starts from `window`, `document` and the root element, the event dives down through ancestors of the target element. _(using our prev example) `window --> document --> html --> body --> div --> button`_
2. **Target Phase:** It occurs when the event arrives at the target element in which user has clicked that has generated the event. _(using our prev example) `button`_
3. **Bubble Phase:** Finally, the event bubbles up through ancestors of the target element until the root element, `document`, and `window`. This phase is totally opossite of the **capture phase** _(using our prev example) `window <-- document <-- html <-- body <-- div <-- button`_

If you run the following code, it will be more easier to understand. The code is given below:
_**Example 2:**_
**Capturing phase:**
```html
<html>
<head>
<style type="text/css">
    div, p, a{
        padding: 15px 30px;
        display: block;
        border: 2px solid #000;
        background: #fff;
    }
</style>
</head>
<body>
<div>DIV
    <p>P
        <a id="click" href="#">A</a>
    </p>
</div>

<script>
    function captureTagName() {
        alert("Capturing: "+ this.tagName);
    }
    var elems = document.querySelectorAll("div, p, a");
    for(let elem of elems) {
        elem.addEventListener("click", captureTagName, true);
    }
</script>
</body>
</html>
```
**Bubbling Phase:**
```html
<html>
<head>
<style type="text/css">
    div, p, a{
        padding: 15px 30px;
        display: block;
        border: 2px solid #000;
        background: #fff;
    }
</style>
</head>
<body>
<div onclick="alert('Bubbling: ' + this.tagName)">DIV
    <p onclick="alert('Bubbling: ' + this.tagName)">P
        <a href="#" onclick="alert('Bubbling: ' + this.tagName)">A</a>
    </p>
</div>
</body>
</html>
```

_**Example 3 (Full overview):**_
```html
<html>
  <body>
    <div id="buttons">
      <button class="buttonClass">Click me</button>
    </div>
    <script>
        const ancestors = [
          window,
          document,
          document.documentElement,
          document.body,
          document.getElementById("buttons")
        ];

        // capture phase
        ancestors.forEach(ancestor => {
          ancestor.addEventListener(
            "click",
            event => {
              console.log("Capture phase: ", event.currentTarget);
            },
            true
          );
        });
        // target phase
        document.querySelector(".buttonClass").addEventListener("click", event => {
          console.log("Target phase: ", event.target);
        });
        // bubble phase
        ancestors.forEach(ancestor => {
          ancestor.addEventListener("click", event => {
            console.log("Bubble phase: ", event.currentTarget);
          });
        });
    </script>
  </body>
</html>
```






