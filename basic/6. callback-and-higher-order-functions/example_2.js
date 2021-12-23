// Dummy object
const object = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]

// Higher Order Function
function modifyArray(arr, callback) {
  return callback(arr);
}

// Callback function which add element to existing array
function addElemToArray(item, arr) {
  return [ ...arr, item ];
}

// Callback function for counting the occurences of a particular object key like, 'framework'
function keyOccurence(key, arr) {
  const obj = {};
  arr.forEach((data) => {
    if(data.hasOwnProperty(key)){
      if(obj[data[key]]){
          obj[data[key]]++;
        }
      else{
          obj[data[key]] = 1;
        }
    }
  })

  const occurenceCountObj = Object.keys(obj).map(k => ({ [key]: k, count: obj[k] }))
  
  return occurenceCountObj;
}

// Common bind wrapper for the callback function
function bindWrapper(func, ...restArgs) {
  return func.bind(null, ...restArgs);
}

console.log(modifyArray(object, bindWrapper(keyOccurence, 'framework')));
/* Output: 
          [ { framework: 'React.JS', count: 2 },
            { framework: 'Angular', count: 1 },
            { framework: 'Vue.JS', count: 1 },
            { framework: 'JavaScript', count: 1 } 
          ]
*/
console.log(modifyArray(object, bindWrapper(addElemToArray, { framework: 'Gats by', website: 'gatsby' })));
/* Output: 
          [ { framework: 'React.JS', website: 'Paypal' },
            { framework: 'React.JS', website: 'Tesla' },
            { framework: 'Angular', website: 'Google' },
            { framework: 'Vue.JS', website: 'Vue' },
            { framework: 'JavaScript', website: 'inblack67' },
            { framework: 'Gats by', website: 'gatsby' } 
          ]
*/
