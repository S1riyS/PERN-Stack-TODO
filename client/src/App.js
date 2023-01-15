import React, {useState} from "react";

import './styles/App.css'
import TodoInput from "./components/TodoInput";


function App() {
    return (
        <div className="App">
            <div className="container">
                <TodoInput/>
            </div>
        </div>
    );
}

export default App;
