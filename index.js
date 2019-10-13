const inputText = document.querySelector('#input-text');
const addTodo = document.querySelector('#add-todo');
const listContainer = document.querySelector('#list-container');

let todoEl = '';
let listItem = '';

window.onload = function () {
    inputText.focus();
};
const handleAddTodo = (e) => {
    todoEl = inputText.value;
    listItem = `<li class="todo-item">
        <p>
        ${todoEl}
        </p>
        <i
        class="fa fa-check-circle-o"
        aria-hidden="true"
        id="unchecked-box"
        ></i>
        <i class="fa fa-trash" aria-hidden="true" id="remove-todo"></i>
        </li>`;
    const frag = document.createRange().createContextualFragment(listItem);
    listContainer.appendChild(frag);
    inputText.value = "";
    inputText.focus();
}

addTodo.addEventListener("click", handleAddTodo);

// handle adding to do on enter
inputText.addEventListener("keypress", (e) => {
    e = e || window.event;
    if (e.keyCode === 13) {
        handleAddTodo();
    }
});

listContainer.addEventListener("click", (e) => {
    var tgt = e.target;
    if (tgt.classList.contains('fa-trash')) {
        tgt.closest('li').parentNode.removeChild(tgt.closest('li'));
    }

    if (tgt.classList.contains('fa-check-circle-o')) {
        tgt.classList.replace('fa-check-circle-o', 'fa-check-circle');
        tgt.previousElementSibling.style.textDecoration = "line-through";
        tgt.previousElementSibling.style.color = 'gray';
    }
    inputText.focus();
});