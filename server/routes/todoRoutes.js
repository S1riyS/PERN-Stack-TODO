const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todoControllers')

router.post('/', todoController.create)
router.get('/', todoController.getAll)
router.get('/:id', todoController.getOne)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router