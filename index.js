let taskInput = document.querySelector(".newtask input");
let addButton = document.querySelector(".push");
let tasks = document.querySelector(".tasks");

addButton.onclick = function(){
    console.log(taskInput.value);
    if (taskInput.value.length == 0){
        alert("Please enter a Task");
    }
    else{
        tasks.innerHTML +=`
        <li class="task">
        <span onClick = "this.classList.toggle{'completed'}" >
        ${taskInput.value}
        </span>
        <button class="delete">
        <i class="fa fa-trash-alt"></i>
        </button>
        </li>
        `;
       
        taskInput.value = "";
        let currenttask = document.querySelectorAll(".delete");
        for(let i = 0;  i< currenttask.length; i++) {
            currenttask[i].onclick = function() {
                this.parentNode.remove()

            };
    }
}
}
