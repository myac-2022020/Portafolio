'use strict'

import express from 'express'
import { validateJwt, isAdmin} from '../middlewares/validate.jws.js'
import { test, register, login, update, deleteU } from './user.controller.js'

const api = express.Router()

api.get('/test', [validateJwt, isAdmin], test)
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteU)

export default api

// export const api // Debo utilizar si o si el nombre que tengo en este archivo
// export default api // Importar con otro nombre