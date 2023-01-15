const pool = require('../db')

class todoController {
    async create(req, res) {
        try {
            const {description} = req.body
            const newTodo = await pool.query(
                "INSERT INTO todo (description) VALUES ($1) RETURNING *",
                [description]
            )
            res.json(newTodo.rows[0])
        } catch (e) {
            console.log(e);
        }
    }

    async getAll(req, res) {
        try {
            const allTodos = await pool.query(
                "SELECT * FROM todo"
            )
            res.json(allTodos.rows)
        } catch (e) {
            console.log(e);
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const todo = await pool.query(
                "SELECT * FROM todo where id = $1",
                [id]
            )
            res.json(todo.rows[0])
        } catch (e) {
            console.log(e);
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params;
            const {description} = req.body;
            const updateTodo = await pool.query(
                "UPDATE todo SET description = $1 WHERE id = $2",
                [description, id]
            );
            res.json("Todo was updated!");
        } catch (e) {
            console.log(e);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1",
                [id]
            );
            res.json("Todo was deleted!");
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new todoController()