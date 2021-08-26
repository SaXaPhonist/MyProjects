import mongoose from 'mongoose'

const Card = new mongoose.Schema(
    {
        category: {type: String, required: true },
        word: {type: String, required: true },
        translation: {type: String, required: true },
        audio: {type: String },
        image: {type: String },
        trainedClick:{type: Number},
        trueClick:{type: Number},
        falseClick:{type: Number}

    }
)

export default mongoose.model('CardInfos',Card)