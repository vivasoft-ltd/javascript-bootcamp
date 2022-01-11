/*
We know that for interlinked/circular objects Reference Counting Algorithm doesn't work.
Here in this example we will see how we can manually make
interlinked object garbage collectable.
*/

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "David"
}, {
    name: "Angela"
}
)

/*
Function marry links two objects by giving them references
to each other and returns a new object that contains them both.
Now all objects are reachable
*/

console.log(family.father)

/*
Suppose we want to make "David" unreachable/garbage collected, for that
we need to remove all the references of "David"
*/

family.father = null;
family.mother.husband = null;

// Now all the references to "David" are gone. So it can be garbage collected