const toDoForm=document.querySelector("#todo-form");
const toDoList=document.querySelector("#todo-list");
const toDoInput=document.querySelector("#todo-form input");

let toDos=[];
const todos_key="todos"

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(todos_key,JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    span.innerText= newToDo.text;
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj={
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos=localStorage.getItem(todos_key);

if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

