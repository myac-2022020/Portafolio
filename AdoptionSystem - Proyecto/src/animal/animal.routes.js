'use strict'

import express from "express"

import { deleteAnimal, keepAnimal, get, updateAnimal, searchAnimal } from "./animal.controller.js"

const api = express.Router()

api.post('/keepAnimal', keepAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)
api.get('/getAnimals', get)
api.post('/searchAni', searchAnimal)

export default api