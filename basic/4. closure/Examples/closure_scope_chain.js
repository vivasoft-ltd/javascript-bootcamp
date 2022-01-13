{/*
Every closure has three scopes:

Local Scope (Own scope)
Outer Functions Scope
Global Scope

Here's a series of nested functions,
 all of which have access to the outer 
 functions' scope. In this context, 
 we can say that closures have access to all outer function scopes.

*/}

// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20