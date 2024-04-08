// if a button is handled in-line and the same button is handled in JS file the PRIORITY will be given to the JS handling


let btn=document.querySelector("a");

btn.onclick= ()=> {
    // do something
    console.log("Clicked");
};

btn.ondblclick = ()=> {

    btn.style.color='black';
};


// event object : has all the information about the handling process 

btn.onmouseover= (e) => {
    console.log(e);
    console.log(e.type);
};