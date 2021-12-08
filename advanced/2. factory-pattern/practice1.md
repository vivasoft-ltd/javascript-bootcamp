Consider the below code where we have created 2 Vehicle objects on the fly. 
How can you improve this code by using the factory design pattern? 

```javascript
const Vehicle1 = {
    manufacturer: "Toyota",
    PlateNO: 12345,
    startEngine () {console.log("Starting engine."},
    drive () {console.log("Driving car...")}
}

	
const Vehicle2 = {
    manufacturer: "Ford",
    PlateNO: 13345,
    startEngine () {console.log("Starting engine."},
    drive () {console.log("Driving car...")}
}
```