//JS Eventloop Example by geting Headers from an URL
//This is done by Ajax Request whis is an Asynchronous
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

//Here the output is:
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

//Note that the header response has come later because of Even Loop

