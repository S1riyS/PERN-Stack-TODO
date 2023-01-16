import React from 'react';

const TodoItem = ({todo, remove}) => {
    return (
        <div className='todo__item'>
            {todo.description}
            <button
                className="btn btn-danger"
                onClick={() => remove(todo.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;