const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use('/api', router)

// Routes
app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1)",
            [description]
        )
        res.json(newTodo)
    } catch (e) {
        console.error(e)
    }
})

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})
