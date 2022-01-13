{/*
This is an example that show another use case of closure.
Var keyword has functional scope. so when we create variable using
 var keyword with the same variable name, its always point to the same variable.
 Here we use asynchronous function setTimeout. when settimeout
  asynchronously executed after timeout, the value of count 
  has been already became 6. Because it will continue the loop upto 5 and then another
  increment operation increment the value of count to 6. so it will print 6 for five time 
  We can solve these issue using closure
*/}

for(var count = 1; count <= 5; count++) {
    setTimeout(() => console.log(count), 1000);
}

{/*
Output:
6
6
6
6
6
*/}