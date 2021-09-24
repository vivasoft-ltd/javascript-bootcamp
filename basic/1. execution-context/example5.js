let globalVar = 'Variable from Global skope'

function a(){
    console.log('Inside a')
    console.log(globalVar);
    console.log()
    let x = 'functional skope of function a';
    b()

    function b(){
        console.log('Inside b')
        let y = 'functional skope of function b'
        console.log(globalVar);
        console.log(x)
        console.log()
        c()

        function c(){
            console.log('Inside c')
            let y = 'functional skope of function b'
            console.log('value of x : ',x)
            console.log(globalVar);
            console.log(y)
            var x = 'functional skope of function c'
            console.log('value of x : ',x)
        }

    }
}
a()

{/*

output:
Inside a
Variable from Global skope
Inside b
Variable from Global skope
functional skope of function a
Inside c
value of x :  undefined
Variable from Global skope
functional skope of function b
value of x :  functional skope of function c
*/}