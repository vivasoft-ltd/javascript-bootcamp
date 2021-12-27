const person = {
    name: 'Anik',
    age: 25
};
  
person = 'Anik';

// Initially, the person object is holding a bunch of internal attributes. 
// Then let’s assume I decided that a person could simply be represented 
// as a string. So now, the first person object has no references pointing 
// to it anymore, which makes it available for garbage collection.

function circularObj() {
    var a = { };
    var b = { };

    a.prop = b;
    b.prop = a;
};

circularObj();

// This creates a cycle. Once the function’s finished, JavaScript’s 
// reference-counting algorithm won’t be able to interpret that these two objects 
// can be collected because they still hold references to each other.
// The 'Mark and sweep algorithm' can easily solve this problem.

