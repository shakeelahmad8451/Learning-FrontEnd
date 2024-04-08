const upperCase='ABCDEFGHIJKLMNOPQRSTUWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='`!"£$%^&*(){}[]<>';



let passwordBox=document.querySelector('input');
console.log(passwordBox);
let generateBtn=document.querySelector('.generate');

let copy=document.querySelector('.bi-copy');


let length=20;



function generatePassword(){
    let password='';

    for(let i=0;i<length/4;i++){
        password+= upperCase[Math.floor(Math.random()*upperCase.length)];
        password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
        password+= numbers[Math.floor(Math.random()*numbers.length)];
        password+= symbols[Math.floor(Math.random()*symbols.length)];
    }
    
    passwordBox.value=password;

}

function copyPassword(){
    if(passwordBox.value==''){
        alert('Please generate password first !!!');
    }
    else{
        passwordBox.select();
        document.execCommand('copy');
    }
}

// generateBtn.addEventListener('click',()=>{
//     generatePassword();

// })