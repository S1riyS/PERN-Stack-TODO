import React from 'react';

import TodoEdit from "./TodoEdit";

const TodoItem = ({todo, remove, edit}) => {
    return (
        <div className='todo__item'>
            {todo.description}
            <div className="item__buttons">
                <TodoEdit edit={edit} todo={todo}/>
                <button
                    className="btn btn-danger"
                    onClick={() => remove(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;