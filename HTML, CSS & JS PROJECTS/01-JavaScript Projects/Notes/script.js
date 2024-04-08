
let createNote=document.querySelector('.create');
let container=document.querySelector('.container');

createNote.addEventListener('click',()=>{
    let note=document.createElement('div');
    note.className='note';
    console.log(note);
    let p=document.createElement('p');
    p.setAttribute('contenteditable','true');
    console.log(p);
    
    let del=document.createElement('button');
    del.className='create';
    del.innerHTML='Delete';




    container.appendChild(note).appendChild(p);
    note.appendChild(del);

    // p.addEventListener('presskey',(e)=>{
      
    // })

    del.addEventListener('click',()=>{
        del.parentElement.remove();
    })
    
})










