import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, remove, edit}) => {
    return (
        <div className="todo__list">
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} remove={remove} edit={edit}/>)
            }
        </div>
    );
};

export default TodoList;