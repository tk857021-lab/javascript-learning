const todolist= [];

function renderTodoList(){
let todoListHTML='';

  for (let i=0;i<todolist.length;i++){
  const todo = todolist[i];
  const html =`<p>${todo}</p>`;
  todoListHTML += html; 
  
  document.querySelector('.js-todo-show').innerHTML=todoListHTML;
}

}

/*
for (let i=0;i<todolist.length;i++){
  const todo = todolist[i];
  console.log(todo);
  
  document.querySelector('.js-todo-show').innerHTML=todolist;
}

*/

function addTodo(){
  const inputElement= document.querySelector('.js-todo-input');
  const name = inputElement.value; 
  console.log(name);
  todolist.push(name);
  console.log(todolist);

  renderTodoList();
 

  inputElement.value='';
}