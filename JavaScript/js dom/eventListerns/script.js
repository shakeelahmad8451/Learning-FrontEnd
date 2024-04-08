// accessing the button
let btn=document.querySelector('button');

// to switch between the colors we need to 
let mode='light';

btn.addEventListener('click',()=>{
    if(mode=='light'){
        console.log('green');
        mode='green';
        document.querySelector('body').style.backgroundColor='green';
    }   
    else{
        console.log('light');
        mode='light';
        document.querySelector('body').style.backgroundColor='white';
    }

});
