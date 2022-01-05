// Here are some other use of call(), bind() and apply() methods

/*
We can use call() to Invoke an Anonymous Function
*/

const sports = [
    { name: 'Cricket' },
    { name: 'Football' }
];

for(let i=0;i<sports.length;i++){
    (function(i){
        this.display = function() {
            console.log(`Number ${i}: ${this.name}`);
        }
        this.display();
    }).call(sports[i], i)
}

/* Output: 
Number 0: Cricket
Number 1: Football
*/


/*
We can use apply() to append an array to another array
*/

const Teams = [
    { name: 'Real Madrid' },
    { name: 'Barcelona' }
];

const otherTeams = [
    { name: 'PSG' },
    { name: 'Man City'}
];

Teams.push.apply(Teams, otherTeams)
console.log(Teams)

/* Output: 
[
  { name: 'Real Madrid' },
  { name: 'Barcelona' },
  { name: 'PSG' },
  { name: 'Man City' }
]
*/
