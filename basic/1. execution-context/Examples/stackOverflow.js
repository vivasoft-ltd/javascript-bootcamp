{/*
Here foo function called itself again and again.
So the call stack  will store the same copy of foo for 
each function call And a functional execution context 
will create for every call inside the call stack.
These cause the stack overflow. Because Call stack 
also has an specific  memory limit
*/}
function foo() {
    foo();
}

foo();

{/*
Uncaught RangeError: Maximum call stack size exceeded
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
    at foo (<anonymous>:2:5)
*/}