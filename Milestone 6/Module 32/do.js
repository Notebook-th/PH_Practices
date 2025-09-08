const loadToDo = () => {
    const url="https://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(res => res.json())
    .then(data => displaytodo(data));
}
//{
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
// }
const displaytodo = (todos) => {
    // 1. get the container
    const todocontainer = document.getElementById("todo-container") 
    todocontainer.innerHTML = "";   
    todos.forEach(todo => {
        console.log(todo)

        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class="todo-card">
        <p>${todo.completed == true ? "✅" : "❌" }</p>
         <h4> ${todo.title} </h4>
        </div>
        `;
        todocontainer.append(todoCard)
    });
};

loadToDo();