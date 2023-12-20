import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Author: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Image: {
        type: String
    }
    // available: {
    //     type: Boolean,
    //     required: true
    // }

})
const Book = mongoose.model("Book", bookSchema);
export default Book;