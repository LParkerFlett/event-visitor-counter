
let countEl = document.getElementById("count-el"); // "We are grabbing the count-el element and storing it in a countEl variable. Hey, html element, why don't you get me the element that has the ID of 'count-el'" then we store it in the countEl variable and have control over the element and can manipulate it. Developers often refer to the technique where you get an element by ID as 'working with the DOM'. The Document Object Model (DOM) is just how you use JavaScript to modify a website. Why the name? Document: what you are interacting with is an HTMl document. Object: the document keyword in JavaScript is of the data type object (we've taken the document and shoved it into a JavaScript object (this is a simplification), so 'document' in document.getElementById() is of the data type object. Model: a representation of the real html document and element within it.

// When we put something between the parentheses of a function like "count-el" it's called to 'pass an argument' which means we are giving the function some date to work with, like here we are specifying the ID of the element we want to grab. 'Count' in console.log(count); is another example where we are passing the variable 'count' that we want to log to the console.


let count = 0;

function increment() {
    count = count + 1,
    countEl.innerText = count, // we are saying we want the text on the inside of the tags to be the count
    console.log(count)
};

// Both '.getElementByID' and '.log' are functions in the same way 'increment()' is a function. They are hooked onto the document object and console objects but are still functions or methods (what we call functions that are hooked onto objects)

function save() {
    console.log(count)
}; // We want to save the count to the website and rendering it out to the button