import React, {useState} from "react";

import './styles/App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function App() {
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <div className="container">
                <TodoInput todos={todos} setTodos={setTodos}/>
                <TodoList todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
}

export default App;
