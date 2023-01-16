import React, {useState} from 'react';

const TodoInput = ({todos, setTodos}) => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/api/todo", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const newTodo = await response.json();
            setTodos([...todos, newTodo])
            setDescription('')
        } catch (err) {
            console.error(err.message);
        }
    };
    return <>
        <h1 className="text-center mt-5">TODO List</h1>
        <form className="d-flex mt-5 mb-4" onSubmit={onSubmitForm}>
            <input
                type="text"
                className="form-control mr-2"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Today i have to ..."
            />
            <button className="btn btn-success">Add</button>
        </form>
    </>
};

export default TodoInput;