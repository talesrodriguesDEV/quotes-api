const { Router } = require('express')

const routes = Router()

const { getController, postController, putController, deleteController } = require('../../controllers/quote')

routes.get('/', getController)
routes.post('/', postController)
routes.put('/:id', putController)
routes.delete('/:id', deleteController)

module.exports = routes