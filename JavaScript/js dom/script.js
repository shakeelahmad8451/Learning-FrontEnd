//Uncomment the tasks one after one and see output



// first we need to access the element
let h2=document.querySelector("h2");

// then we need to find which property should we use
/* Proprties (
    1. tagName : returns the tag of the element node
    2. innerText: returns the content of the element
    3. innerHTML: returns the whole html content of the element
    4. textContent: returns the textual content even for the hidden element(where visibility : hidden;)
    )
*/

// this will print "Js Dom" on console
console.dir(h2.innerText);
//concatenation of the strings (appending) OUTPUT : "Js Dom from xyz"
h2.innerText=h2.innerText+" from xyz";








//Task-02 
// accessing the class of box : this will select the first div
let box=document.querySelector(".box2");

box.innerText="abcd"; // will only change the text of first div

//but we have multiple divs with same class so
//just like an array
let divs=document.querySelectorAll(".box2");  // this will retun a NodeList of 3 divs as we have 3 divs

console.dir(divs);

divs[1].innerText="changed text using array";






//Task-03 Use array with for-loop to set unique text

/* let md=document.querySelectorAll(".box3");  // this will retun a NodeList of 3 divs as we have 3 divs

 for(d of md){
//     d.innerText="New Unique text using for-loop";
 }
 console.dir(md);
*/







// Task-04 changing the div of h2 using js only

/*let firstHeading=document.querySelector('h2');

console.log(firstHeading.innerText);
firstHeading.style.color="green";
*/

