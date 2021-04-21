let mainTodoContainer = document.querySelector('#todos');
let inputData = document.querySelector('#todo-input-data');
let addButton = document.querySelector('#add-data');
let dltButton = document.querySelector('#delete-data');

addButton.addEventListener('click', function(){
    if(inputData.value.trim()) {

        // Initial Tag create
        let ulTag = document.createElement('ul');
        ulTag.classList.add("todo-list-container");

        
        let todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        
        let liTag = document.createElement('li');
        liTag.classList.add('todo-item');
        liTag.innerHTML = inputData.value;


        // Initial Button create

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button-group');

        let completeButton = document.createElement('button');
        completeButton.classList.add('complete');
        completeButton.innerHTML = '<span>Complete</span>';

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = '<span>Edit</span>';
        editButton.addEventListener("click", function() {
            editData(liTag);
        })

        let trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<span>Trash</span>';

        // Append classes

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);

        // Append for main div
  
        mainTodoContainer.appendChild(ulTag);

        todoList.addEventListener('click',function(e) {
            let items = e.target;
            if(items.classList[0] === 'complete'){
                let getItemParent = items.parentElement;
                let getMainParent = getItemParent.parentElement;
                getMainParent.classList.add('line-through');
            }else if (items.classList[0] ==="trash") {
                let getItemParent  = items.parentElement;
                let getMainParent = getItemParent.parentElement;
                let getRootParent = getMainParent.parentElement;
                getMainParent.classList.add("fall");
                getMainParent.addEventListener("transitionend",function() {
                    getMainParent.remove();
                })
               }
              }
             )
        // When add input the input box is empty
        inputData.value = "";
        
       }else if(inputData.value == '') {
         alert('Please input data');
    }
})

function editData(e) {
    let editValue = prompt("Edit the selected item", e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
