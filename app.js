const inputBox = document.getElementById("input-box"); //inputBox
const listContainer = document.getElementById("list-container");//ul-element

//To-Add:
function addTask(){
    if(inputBox.value === ""){
        alert("Enter your list in the the Box")
    } else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//To-Delete a single list:
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //so there is no classname called checked in HTML so it create one and act according to CSS
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //parentEle is li
        saveData();
    }
}, false);

//To-Delete all task:
function deleteAll(){
    listContainer.innerHTML = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
