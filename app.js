let noteList= document.querySelector('.note-list')
 


//event listeners
evenlisteners()
function evenlisteners(){
    //form submit
    document.querySelector('.form').addEventListener('submit',newNote)
    
    //remove note
    document.querySelector('.note-list').addEventListener('click',removeNote)

    document.addEventListener('DOMContentLoaded', localStorageOnLoded)
}

//adding new note to the list
function newNote(e) {
    e.preventDefault()
    //access to the value
    const note =document.querySelector('input').value
    
    //creat li tag
    const li= document.createElement('li')
    li.classList='my-4'
    li.appendChild(document.createTextNode(note))
    
    //adding li to the note-list
    noteList.appendChild(li)

    //creat remove elemnt
    const removeBtn= document.createElement('a')
    removeBtn.textContent='X'
    removeBtn.classList='text-red-500 remove rounded px-1 mx-10 text-xl'
    

    //adiing remove elemnt
    li.appendChild(removeBtn)

    this.reset()
    alert('یادداشت شما با موفقیت ذخییره شد')

    addNoteToLocalStorage(note)
    
    
}

//remove note form list
function removeNote(e) {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
        }
    
    //also remote the note
    removeNoteLocalStorage(e.target.parentElement.textContent)

}

//adding note to the local storage
function addNoteToLocalStorage(note) {
    //get the notes form locastorage
    const notes= GetNoteFormLocalStorage()
    //add new note to the notes array
    notes.push(note)
    //add new notes array to the localstorage
    localStorage.setItem('notes',JSON.stringify(notes))
    

    
}

//get notes from LocalStorage
function GetNoteFormLocalStorage() {
    let notes;
    
    //get previous notes from locastorage
    let getformLs= localStorage.getItem('notes');
    
    if (getformLs === null) {
        notes= []
        
    } else {
        notes= JSON.parse(getformLs)
    }
    return notes
    
}

//
function localStorageOnLoded() {
    const notes= GetNoteFormLocalStorage();
    

    //
    notes.forEach(function(note) {
    //creat li tag
    const li= document.createElement('li')
    li.classList='my-4'
    li.appendChild(document.createTextNode(note))
    
    //adding li to the note-list
    noteList.appendChild(li)

    //creat remove elemnt
    const removeBtn= document.createElement('a')
    removeBtn.textContent='X'
    removeBtn.classList='text-red-500 remove rounded px-1 mx-10 text-xl'
    

    //adiing remove elemnt
    li.appendChild(removeBtn)

       
        
    });
    
}
//also remove note form local storage
function removeNoteLocalStorage(noteContent) {
    //delete X from the content
    const noteDeleted= noteContent.substring(0, noteContent.length -1)
    
    //get notes from locastorage
    const notesFromLS= GetNoteFormLocalStorage()
    
    notesFromLS.forEach(function(note,index) {
        if (note===noteDeleted) {
            console.log(index);
            notesFromLS.splice(index,1) 
            
        }
    
        //set new araay of note to the local storage
        localStorage.setItem('notes',JSON.stringify(notesFromLS))
    });
    
}