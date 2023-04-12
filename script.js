const addButton = document.querySelector("#add")
const mainArea = document.querySelector(".main-area");


const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = []; 

    console.log(textAreaData);
    textAreaData.forEach(element => {
        return notes.push(element.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}



const addNewNote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = 
    `   <div class="title">
            <div class="note-title">
                <h4>Note</h4>
            </div>
            <div class="operations">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <div class="main ${text? "" : "hidden"}"></div>
        <textarea class="note-text ${text ? "hidden" : ""}" rows="10"></textarea>
    `;

    note.insertAdjacentHTML('afterbegin', htmlData);


    // Getting references of edit and delete buttons.
    const editButton = note.querySelector(".edit");
    const deleteButton = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textarea = note.querySelector("textarea");

    // Deleting a note

    deleteButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    });

    
    // Toggle using edit button
    textarea.value = text;
    mainDiv.innerHTML = text;


    editButton.addEventListener('click', () =>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    // On change detetction
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;
        // Function to store values in local storage
        updateLSData();
    });

    mainArea.appendChild(note);
}

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note) => addNewNote(note));
};


addButton.addEventListener("click", () => addNewNote());
