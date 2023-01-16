import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, remove}) => {
    return (
        <div className="todo__list">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} remove={remove}/>)
            }
        </div>
    );
};

export default TodoList;