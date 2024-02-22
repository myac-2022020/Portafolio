'use strict'

import express from 'express'
import { save } from './appointment.controlller.js'
import { validateJwt } from '../middlewares/validate.jws.js'

const api = express.Router()

//Rutas privadas - Client

api.post('/save',validateJwt, save)

export default api