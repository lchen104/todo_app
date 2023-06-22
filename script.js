// Bring in elements from todo list
const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

// console.log(todoUL);

form.addEventListener('submit', (e) => {
    // to allow addTofo() function to run instead of submiting
    e.preventDefault();

    // console.log(e);

    addTodo();
});

function addTodo(todo) {
    // saving the input value (text) to a var
    let todoText = input.value;

    // checking if a todo exists
    if (todo) {
        // set the value of the input to the value of the todo.text
        todoText = todo.text;
    }
    // console.log(todoText);

    // if the text exists
    if (todoText) {
        // create a new list item
        const todoEL = document.createElement('li');

        // if there is a todo AND it is completed
        if (todo && todo.completed) {
            // add a strikethrough class
            todo.classList.add('completed');
        }
       
        // MAke the etst of li same as inout value
        todoEL.innerText = todoText;

        //  Append the todo li item to the todo un-ordered list
        todoUL.appendChild(todoEL);

        // clear out input after enter
        input.value = "";

        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed');
        })

        todoEL.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            // remove list item
            todoEL.remove();
        });
    }

};

