function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
 
console.log('value of a is ',a);
console.log('value of b is ',b);

{/*
output:
value of a is  10
Uncaught ReferenceError: b is not defined
*/}