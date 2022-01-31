
ইফেক্ট বুঝতে হলে প্রথমে এই HTML ফাইলটি আপনার ব্রাউজারে ওপেন করে মাউসের রাইট বাটন ক্লিক করে Inspect এ ক্লিক করুন।
অতঃপর Console ট্যাবে ক্লিক করুন। এখন Event Bubbling ও Event Capturing কিভাবে হচ্ছে সেটা বুঝতে বক্সগুলোতে
ক্লিক করে দেখুন। 

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
        body { height: 100vh; }
        h2 { text-align: center; }
        div { border: 2px solid black; }
        .mid {
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            transition: .5s ease;
        }
        .hw300 {
            height: 300px;
            width: 300px;
        }
        .hw150 {
            height: 150px;
            width: 150px;
        }
        .red { background-color: red; }
        .lime { background-color: lime; }
        .blue { background-color: blue; }
        .gold { background-color: gold; }
    </style>
</head>
<body class="mid" style="cursor: auto;">
    <!-- Event Bubbling Section  -->
    <h2>
        Event Bubbling
        <div id="red" class="mid hw300">
            <div id="lime" class="mid hw150">
                Click Me
            </div>
        </div>
    </h2>

    <!-- Event Capturing Section -->
    <h2>
        Event Capturing
        <div id="blue" class="mid hw300">
            <div id="gold" class="mid hw150">
                Click Me
            </div>
        </div>
    </h2>


    <!-- JavaScript Code for Functionality -->
    <script>
        const redDiv = document.querySelector('#red');
        const limeDiv = document.querySelector('#lime');
        const blueDiv = document.querySelector('#blue');
        const goldDiv = document.querySelector('#gold');

        // Event Bubbling Phase
        redDiv.addEventListener('click', () => {
            console.log('Red box clicked.');
            const timeout = setTimeout(() => {
                redDiv.classList.add('red');
            }, 500);
        })
        limeDiv.addEventListener('click', () => {
            console.log('Lime box clicked');
            const timeout = setTimeout(() => {
                limeDiv.classList.add('lime');
            }, 100);
        })
        
        // Event Capturing Phase
        blueDiv.addEventListener('click', () => {
            console.log('Blue box clicked.');
            const timeout = setTimeout(() => {
                blueDiv.classList.add('blue');
            }, 100);
        }, true)
        goldDiv.addEventListener('click', () => {
            console.log('Golden box clicked');
            const timeout = setTimeout(() => {
                goldDiv.classList.add('gold');
            }, 500);
        }, true)

    </script>

</body>
</html>

```

এই উদাহরণে আমরা তেমন কোন নতুন কাজ করি নাই। এই উদাহরণে আমরা শুধুমাত্র প্রোসেস দুটি কিভাবে হচ্ছে সেটার একটা ভিজুয়াল ইফেক্ট তৈরী করেছি।
