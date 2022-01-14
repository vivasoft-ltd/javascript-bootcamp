/*
In this example, we will learn about localStorage of a browser.
As we already know, in localStorage the data is persisted until 
the user manually clears the browser cache or until your web app clears the data.
*/

// To create a entity we need to use a function named setItem
// which takes key and value as parameters

localStorage.setItem("item1", "Football")

// we can read this by using getItem
localStorage.getItem("item1")

// we can also update the existing item by using setItem
localStorage.setItem("item1", "Cricket")

// we can delete the item using removeItem
localStorage.removeItem("item1")

// we can also clear everything that stored in localStorage by using this
localStorage.clear()

/*
We can also use these 4 methods in sessionStorage. like,
sessionStorage.setItem(), sessionStorage.getItem(), sessionStorage.removeItem() and
sessionStorage.clear()
*/