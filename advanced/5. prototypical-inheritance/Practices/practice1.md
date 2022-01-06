
What do you think the output of this code will be?
And why?

```js
function House () {
    this.height= 100;
    this.width= 50;
}

let house1 = new House();
House.prototype.height = 200;
console.log(house1.height)
```
