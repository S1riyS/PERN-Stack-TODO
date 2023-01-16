import React, {useEffect} from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, setTodos}) => {
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/todo");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    const deleteTodo = async id => {
        try {
            await fetch(`http://localhost:5000/api/todo/${id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            });
            setTodos(todos.filter(todo => todo.id !== id))

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="todo__list">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)
            }
        </div>
    );
};

export default TodoList;