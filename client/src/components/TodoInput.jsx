import React, {useState} from 'react';

export const TodoInput = ({create}) => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        if (description.length) {
            create(description)
            setDescription('')
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