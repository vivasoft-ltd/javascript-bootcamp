Consider the following scenario. Will the 'Reference counting algorithm' be able to recognize these 2 objects as garbage? Between the two garbage collection algorithms of JS, which one will be more appropriate here and why?

```javascript
function circularReference() {
	var one = {};
	var two = {};

	one.object = two;
	two.object = one;
}
```
