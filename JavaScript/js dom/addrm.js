// creating a new button

let newButton=document.createElement("button");
newButton.innerText="Click Me";
newButton.style.backgroundColor='red';
newButton.style.color='white';

let body=document.querySelector('body');

body.prepend(newButton);


// a new css class with the name 'newClass' has been created , append this class to the paragraph tag which  already has a class 'content'

let para=document.querySelector("p");

// will return the attributes  output = content , which is the class of paragraph
console.log(para.getAttribute('class'));


//let classes=para.getAttribute('class'); // this will return all the attributes of the class


//appending the new class  but this will override the old class
para.setAttribute('class','newClass');  // this will overide the class 'content' with 'newClass'

// to append new classes we need to use classLists
para.classList.add('content');

// now we can see two classes added to the para tag
console.log(para);

