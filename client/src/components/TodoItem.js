import React from 'react';

const TodoItem = ({todo, deleteTodo}) => {

    return (
        <div className='todo__item'>
            {todo.description}
            <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;