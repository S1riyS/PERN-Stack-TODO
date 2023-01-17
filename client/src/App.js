import {useEffect, useState} from "react";

import {getAll, create, remove, update} from "./Api";

import './styles/App.css'
import {TodoInput} from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
    const [todos, setTodos] = useState([]);

    const getTodos = () => {
        getAll()
            .then(object => {
                setTodos(object.data);
            })
            .catch(object => {
                console.log(object);
            })
    }

    const createTodo = description => {
        create(description)
            .then(object => {
                const newTodo = object.data
                setTodos([newTodo, ...todos])
            })
            .catch(object => {
                console.log(object);
            })
    }

    const removeTodo = id => {
        remove(id)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id))
            })
    }

    const editTodo = (id, description) => {
        update(id, description)
            .then(() => {
                setTodos(prev => prev.map(item => {
                    if (item.id === id) return {...item, description: description}
                    return item
                }))
            })
    }

    useEffect(getTodos, [todos])


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
