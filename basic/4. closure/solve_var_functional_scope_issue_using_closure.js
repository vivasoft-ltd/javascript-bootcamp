//ex:1

{/*
    In these example We have solve the previous issue
    in two differents way. First one using Closure.
    Here we called an Anonymous function in every iteration.
    We know function create closure with its lexical scope.
    So These Anonymous function  will creates closure with count variable.
    When the Timeout finished , it will print the value from closure.
*/}
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

{/*
let has block scope and var has functional skope. 
so let create differents variable in every time where 
var point to the same variable every time.
*/}

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


*/}    