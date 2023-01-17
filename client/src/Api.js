import axios from "axios";

export const getAll = () => {
    return axios.get('http://localhost:5000/api/todo')
}

export const create = description => {
    return axios.post('http://localhost:5000/api/todo', {
        description: description
    })
}

export const remove = id => {
    return axios.delete(`http://localhost:5000/api/todo/${id}`)
}

export const update = (id, description) => {
    return axios.put(`http://localhost:5000/api/todo/${id}`, {
        description: description
    })
}