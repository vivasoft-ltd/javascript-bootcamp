//lexical scope
function Fish(){
    var a="its very tasty"
    function hilsha(){
        console.log(a)
    }
    hilsha();
}
Fish(); // its very tasty