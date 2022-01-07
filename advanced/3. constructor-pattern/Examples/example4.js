/*
We know while using the constructor pattern,
we need to manage the context of this by using the new keyword.
There is another technique which avoids this.
Which is using Closure with getters and setters.
*/

function Rectangle(length, width){
    let _length = length;
    let _width = width;

    let rectangle = {};
    rectangle.Area = function(){
        return _length * _width;
    }
    // Getter/setters
    rectangle.Length = function(value){
        if(!arguments.length) return _length;
        _length = value;
        return rectangle;
    }

    rectangle.Width = function(value){
        if(!arguments.length) return _width;
        _width = value;
        return rectangle;
    }
    return rectangle;

}

let rectangle1 = Rectangle(10, 10); // no 'new' keyword
console.log(rectangle1.Area()) // Output: 100

rectangle1.Length(100)
rectangle1.Width(50)
console.log(rectangle1.Area()) // Output: 5000

/*
With a reference of 'rectangle1' object we can 
set Length and Width property to any value.
*/