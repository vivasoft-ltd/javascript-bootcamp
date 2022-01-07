/*
call(), bind() and apply() methods are used for several reasons.
Some of them are:
1. Create custom value of "this"
2. Borrowing another objects methods
which means invoking an object’s method on a totally different object
*/

/*
call() Method
- The first parameter of call() method is an object on which "this" will point to
- Other parameters are variables
*/

let Team = {
    getStatistics : function(league, season){
        return this.name + " are " +this.position+ " in "+ league+" with "+this.points+" points in season "+season; 
    }
}

let RealMadrid = {
    name: "Real Madrid",
    position: "1st",
    points: 46
}

let Barcelona = {
    name: "FC Barcelona",
    position: "5th",
    points: 31
}

console.log(Team.getStatistics.call(RealMadrid, "Laliga", "2022"));
// Here we set "this" of getStatistics method to RealMadrid object
// Output: Real Madrid are 1st in Laliga with 46 points in season 2022

console.log(Team.getStatistics.call(Barcelona, "Laliga", "2022"));
// Here we set "this" of getStatistics method to Barcelona object
// Output: FC Barcelona are 5th in Laliga with 31 points in season 2022


/*
apply() Method
- The first parameter of apply() method is an object on which "this" will point to
- The second parameter of the apply() method accepts the arguments as an array.
- Which is the only difference between call() and apply()
*/

let others = ["Laliga", "2022"];
console.log(Team.getStatistics.apply(RealMadrid, others));
// Here we set "this" of getStatistics method to RealMadrid object
// On 2nd parameter we used an array to produce the same output
// Output: Real Madrid are 1st in Laliga with 46 points in season 2022


/*
bind() method
- bind() method is like call() method
but it returns a bound function which will be invoked later 
*/

let result = Team.getStatistics.bind(Barcelona, "Laliga", "2022");
console.log(result())
// Output: FC Barcelona are 5th in Laliga with 31 points in season 2022
// Here we stored the bound function in the result variable
// Then we invoked the returned function later
