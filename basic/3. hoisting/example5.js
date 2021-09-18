
console.log('value of a is ',a);
function codeHoist(){
    a = 10;
}
codeHoist();

{/*
output:
ReferenceError: a is not defined
*/}