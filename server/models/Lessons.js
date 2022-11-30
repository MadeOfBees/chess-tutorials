const {Schema, model} = require("mongoose");

const lessonSchema = new Schema ({
    startingmoves: {
        type: String,
        // required: true,
    },

    lessontitle: {
        type: String,
        // required: true,
    },

    
        lessondescription: {
            type: String,
            // required: true,
        }
    
})

const Lessons = model('Lessons', lessonSchema)
module.exports = Lessons;