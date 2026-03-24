const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

taskBtn.addEventListener("click", function(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;
    if(taskInpunVelue == ''){
        return
    }
    const span = document.createElement('span';)
    span.textContent = taskInputValue;
    const button = documenct.creatElement('button');
    button.textContent = 'Excluir'
    button.addEventListener('click',function(){
    li.appendChild(span)
    li.appendChild(button)
    })

    if (taskInput)
    li.textContent = taskInputValue;
    taskList.appendChild(li);
})