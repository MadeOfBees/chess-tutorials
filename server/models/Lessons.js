const {Schema, model} = require("mongoose");

const lessonSchema = new Schema ({
    startingmoves: {
        type: String,
        required: true,
    }
})

const Lessons = model('Lessons', lessonSchema)
module.exports = Lessons;