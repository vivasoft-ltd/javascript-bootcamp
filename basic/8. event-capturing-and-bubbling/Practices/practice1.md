
নীচের কোডটি কোন HTML ডকুমেন্ট হিসেবে সংরক্ষণ করুন এবং আপনার ব্রাউজারে ওপেন করুন। কোডটি ব্রাউজারে ওপেন করলে চারটি কালারের (লাল-সোনালী-সবুজ-আকাশি) বক্স দেখতে পাবেন। মাঝের Skyblue (আকাশি) কালারের বক্সে ক্লিক করলে ইভেন্টের সিরিয়াল কেমন হবে? 

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling and Capturing</title>

    <!-- CSS Style for Better Visualization -->
    <style>
        body {
            height: 100vh;
        }
        h2 { text-align: center; }
        .mid {
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
        }
        .hw400 {
            height: 400px;
            width: 400px;
        }
        .hw300 {
            height: 300px;
            width: 300px;
        }
        .hw200 {
            height: 200px;
            width: 200px;
        }
        .hw100 {
            height: 100px;
            width: 100px;
        }
        #red { background-color: red; }
        #green { background-color: green; }
        #skyblue { background-color: skyblue; }
        #gold { background-color: gold; }
    </style>
</head>
<body class="mid" style="cursor: auto;">
    <div id="red" class="mid hw400">
        <div id="gold" class="mid hw300">
            <div id="green" class="mid hw200">
                <div id="skyblue" class="mid hw100">
                    Click Me
                </div>
            </div>
        </div>
    </div>


    <!-- JavaScript Code for Functionality -->
    <script>
        const redDiv = document.querySelector('#red');
        const goldDiv = document.querySelector('#gold');
        const greenDiv = document.querySelector('#green');
        const skyblueDiv = document.querySelector('#skyblue');

        redDiv.addEventListener('click', () => {
            console.log('Red box clicked.');
        }, true)
        goldDiv.addEventListener('click', () => {
            console.log('Golden box clicked.');
        })
        greenDiv.addEventListener('click', () => {
            console.log('Green box clicked');
        }, true)
        skyblueDiv.addEventListener('click', () => {
            console.log('Skyblue box clicked');
        })

    </script>

</body>
</html> 

```