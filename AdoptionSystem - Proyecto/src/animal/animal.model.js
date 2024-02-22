import mongoose, { trusted, Schema} from "mongoose"

const animalSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    race:{
        type: String,
        required: true
    },
    keeper:{
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    }
})

export default mongoose.model('animal', animalSchema)