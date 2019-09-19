/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when the this keyword is used in global scope
* 2. implicit bindign is when you call a funciton with this. precending it
* 3. new binding is when you use the new keyword to call/apply a constructors properties to a new variable
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);


// code example for Window Binding

// Principle 2
function sayMyName(n) {
    this.name = n;
    this.speak = function () {
        return `Hello, my name is ${this.name}`;
    };
    console.log(this.name);
}
sayMyName("Harrison");

// code example for Implicit Binding

// Principle 3
const jade = new sayMyName("Jade");
const grace = new sayMyName("Grace");
// code example for New Binding

// Principle 4
console.log(jade.speak());
console.log(grace.speak.call(jade))
console.log(sayMyName().speak.call(jade))

// code example for Explicit Bindin