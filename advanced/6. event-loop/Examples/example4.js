//JS Eventloop এর উদাহরণ দেখান হয়েছে একটা URL এ request পাঠিয়ে
//এটা করা হয়েছে এজ্যাক্স Request এর মাধ্যমে, যেটা Asynchronous
//live: https://jsfiddle.net/rijans/v17t6qhu/10/


function main(url){
    console.log('Lets get URL Headers!');
    setTimeout( function (){

//get headers of an URL
        let req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.send(null);
        let headers = req.getAllResponseHeaders().toLowerCase();

        console.log(headers);
    }, 1000);

    console.log('Done!');
}

main('https:://vivasofltd.com');

//এটার ফলাফল এমন:
// "Let get URL Headers!"
// "End!"
// "content-encoding: gzip
// content-type: text/html; charset=utf-8
// date: thu, 13 jan 2022 17:54:06 gmt
// server: nginx
// vary: origin
// x-request-id: 64624b39-d4ec-4d4d-b8c4-480ddabc8709
// x-runtime: 0.002067
// "

//লক্ষ করে দেখুন যে header response টা পরে আসছে, event লুপ এর কারণে
