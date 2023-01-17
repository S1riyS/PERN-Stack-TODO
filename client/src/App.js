import React, {useEffect, useState} from "react";

import './styles/App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/todo");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodoByID = async id => {
        try {
            const response = await fetch(`http://localhost:5000/api/todo/${id}`);
            return await response.json()
        } catch (err) {
            console.error(err.message);
        }
    }

    const createTodo = async description => {
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/api/todo", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const newTodo = await response.json();
            setTodos([...todos, newTodo])
        } catch (err) {
            console.error(err.message);
        }
    }

    const removeTodo = async id => {
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

    const editTodo = async (id, description) => {
        try {
            const body = {description};
            await fetch(`http://localhost:5000/api/todo/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const updatedTodo = await getTodoByID(id)
            console.log(updatedTodo);
            setTodos(prev => prev.map(item => {
                if (item.id === id) return {...item, description: description}
                return item
            }))

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="App">
            <div className="container">
                <TodoInput create={createTodo}/>
                <TodoList todos={todos} remove={removeTodo} edit={editTodo}/>
            </div>
        </div>
    );
}

export default App;
