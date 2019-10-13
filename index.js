const inputText = document.querySelector('#input-text');
const addTodo = document.querySelector('#add-todo');
const listContainer = document.querySelector('#list-container');

let todoEl = '';
let listItem = '';

const handleAddTodo = (e) => {
    todoEl = inputText.value;
    listItem = `<li class="todo-item">
        <i
        class="fa fa-check-circle-o"
        aria-hidden="true"
        id="unchecked-box"
        ></i>
        <p>
        ${todoEl}
        </p>
        <i class="fa fa-trash" aria-hidden="true" id="remove-todo"></i>
        </li>`;
    const frag = document.createRange().createContextualFragment(listItem);
    listContainer.appendChild(frag);
    inputText.value = "";
}

addTodo.addEventListener("click", handleAddTodo);


listContainer.addEventListener("click", (e) => {
    var tgt = e.target;
    if (tgt.classList.contains('fa-trash')) {
        tgt.closest('li').parentNode.removeChild(tgt.closest('li'));
    }

    if (tgt.classList.contains('fa-check-circle-o')) {
        tgt.classList.replace('fa-check-circle-o', 'fa-check-circle');
        console.log(tgt.nextElementSibling.style)
        tgt.nextElementSibling.style.textDecoration = "line-through";
        tgt.nextElementSibling.style.color = 'gray';
    }
});