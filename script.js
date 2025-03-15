const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
/* Used document object and getElementById method to select our input box and list container elements. */
// Now create our addTask() function
function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }
// Se agregan nuevos objetos al documento con el método createElement() 
const li = document.createElement("li");
  
//Creamos el checkbox
const label = document.createElement("label");
const checkbox = document.createElement("input");
checkbox.type = "checkbox"; 

// Crear el texto
const taskText = document.createElement("span");
taskText.textContent = task;

//Creamos los botones de EDITAR y ELIMINAR
const editBtn = document.createElement("span");
editBtn.classList.add("edit-btn");
editBtn.textContent = "Edit";

const deleteBtn = document.createElement("span");
deleteBtn.classList.add("delete-btn");
deleteBtn.textContent = "Delete";

//Estructura del <li>
label.appendChild(checkbox);
label.appendChild(taskText);
li.appendChild(label);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

document.body.appendChild(li);

///Variables creadas para tareas completas e incompletas.
function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("incompleted-counter");
updateCounters();
}

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

// Se usa classList.toggle() para agregar una clase completada al elemento de la lista (li)
checkbox.addEventListener("click", function() {
    li.classList.toggle("completed", checkbox.checked);
});
//Cuando la casilla de verificación está marcada checkbox.checked es verdadero y se elimina la clase completada.

/* Para que el botón de editar (editBtn) funcione, usamos el método .addEventListener(), que ejecuta la función al clicar*/
editBtn.addEventListener("click",function(){
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
    }
});
li.classList.remove("completed");
