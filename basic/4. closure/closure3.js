//ex:1
for(var count = 1; count <= 5; count++) {
    (function (){
        var closurVar=count
        setTimeout(() => console.log(closurVar), 1000);

    })()
}

{/*
Output:
1
2
3
4
5
*/}

//ex:2

for(let count = 1; count <= 5; count++) {
        setTimeout(() => console.log(count), 1000);
    }
{/*
Output:
1
2
3
4
5

ie:let has block scope and var has functional skope. 
so let create differents variable in every time where 
var point to the same variable every time.
*/}    