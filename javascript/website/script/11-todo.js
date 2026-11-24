let todolist= [];

function addTodo(){
  const inputElement= document.querySelector('.js-todo-input');
  const name = inputElement.value; 
  console.log(name);
  todolist.push(name);
  console.log(todolist);

  inputElement.value='';
}