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