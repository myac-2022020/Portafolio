import { checkUpdate, checkUpdateAnimal } from '../utils/validator.js'

import User from '../user/user.model.js'
import Animal from './animal.model.js'

export const keepAnimal = async(req, res)=>{
    try {
        let data = req.body
        let user = await User.findOne({_id: data.keeper})
        if(!user) return res.status(404).send({message: 'Keeper not found'})
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: 'Registered Successfully'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Error when registering a pet'})
    }
}

export const updateAnimal = async(req, res)=>{
    try {
        let { id } = req.params
        let data = req.body

        let update = checkUpdateAnimal(data, false)
        if(!update) return res.status(400).send({message: 'Have submitted some data that connot be update or missing data'})
        let updatePet = await Animal.findOneAndUpdate(
            {_id: id}, 
            data,
            {new: true}
        ).populate('keeper',['name', 'phone'])
        if(!updatePet) return res.status(401).send({message: 'Animal not found and update'})
        return res.send({message: 'The data by animal is update successfully', updatePet})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'The animal is not found'})
    }
}

export const deleteAnimal = async(req, res)=>{
    try {
        let { id } = req.params
        let deleteAnimal = await Animal.findOneAndDelete({_id: id})
        if(!deleteAnimal) return res.status(400).send({message:'Animal not found and deleting'})
        return res.send({message: `Animal with name ${deleteAnimal.name} delete successfully`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'The Animal is not found'})
    }
}

export const get = async(req, res)=>{
    try {
        let animals = await Animal.find()
        return res.send({animals})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Error getting animals'})
    }
}

export const searchAnimal = async(req, res)=>{
    try {
        // Obtener el parametro de busqueda
            let { search } = req.body
        // Buscar
            let animals = await Animal.find(
                {name: search}
            ).populate('keeper',['name','phone'])
        // Validar la respuesta
            if(animals.length == 0) return res.status(404).send({message: 'Animal not found'})
        // Responder si todo sale bien
            return res.send({message: 'Animals found', animals})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:'Animal not found'})
    }
}