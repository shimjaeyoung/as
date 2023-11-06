const todoSwith = (event) => {

    const eventId = event.target.id;
    const newTodoList = [...todoList];
    newTodoList[eventId].isDone = !newTodoList[eventId].isDone;

    setTodoList(newTodoList);
};

const deleteTodo = (event) => {

    const eventId =Number(event.target.id);
    const newTodoList = todoList.filter((todo)=> todo.id !== eventId);
    setTodoList(newTodoList);
};