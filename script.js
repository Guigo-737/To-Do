const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

function createSpan(taskInputValue){
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    return span;
}

function createDeleteButton(taskInputValue){
    const button = document.createElement('button');
    button.textContent = 'Excluir';
    button.addEventListener('click', function(){
        li.remove();
})

function addTask(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value; 
    if (taskInputValue == '')
        return
    }
    const span = createSpan(taskInputValue);
    const deleteBtn = createDeleteButton(li)
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

}
taskBtn.addEventListener("click", addTask)                                                                  