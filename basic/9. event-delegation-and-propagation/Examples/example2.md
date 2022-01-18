Another classic example of event delegation would be 
this example below, which we might use regularly. 

Suppose we have a div on which we have many input boxes. 
We want to convert specific input values to uppercase. -->

```html
<!DOCTYPE html>
<head>
    <title>Event Delegation & Propagation</title>
</head>
<body>
    <div id="form">
        <input type="text" id="firstname" placeholder="First Name" data-uppercase>
        <input type="text" id="lastname" placeholder="Last Name" data-uppercase>
        <input type="text" id="phone" placeholder="Phone Number" >
        <input type="text" id="email" placeholder="Email" >
    </div>

    <!-- Here in this example, we select every input field which has a data-uppercase
    property and automatically convert them to uppercase characters. -->

    <script>
        document.querySelector("#form").addEventListener("keyup", (e)=> {
            if(e.target.dataset.uppercase != undefined){
                e.target.value = e.target.value.toUpperCase()
            }
        })
    </script>
</body>
</html>
```