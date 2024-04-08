let task=document.querySelector('.search-box input');
console.log(task);

const listContainer=document.querySelector('.list-container')
console.log(listContainer);

function addTask(){
    if(task.value===""){
        alert('Please add Text !!!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=task.value;
        listContainer.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML='x';
        li.appendChild(span);
        
        
        saveData();

        
    }
    task.value='';
}

task.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        addTask();
    }
})



listContainer.addEventListener('click',(e)=>{
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    // console.log(e.target.classList);

    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }

});


//Saving Data on Local Storage
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML=localStorage.getItem('data');
}

showData();