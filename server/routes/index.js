const Router = require('express')
const router = new Router()
const todoRouter = require('./todoRoutes')

router.use('/todo', todoRouter)

module.exports = router