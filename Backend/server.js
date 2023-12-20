import express from "express";
import mongoose from "mongoose";
import Book from "./models/userModels.js";

const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://127.0.0.1:27017/bookstoredb")
    .then(() => {
        console.log("Connected to Database")
        app.listen(5000, (req, res) => {
            console.log("Server is running on port 5000")
        })
    })
    .catch((error) => { console.log(error) })

// Routes  
app.post("/", async (req, res) => {
    try {
        const { name, author, description, price, image, available } = req.body;
        const book = await Book.create({
            Name: name,
            Author: author,
            Description: description,
            Price: price,
            Image: image
            // available: available
        })
        res.status(201).json("Book Added")
    } catch (error) {
        res.status(404).json({ error: error.message })
    }


})
app.get("/", async (req, res) => {
    try {
        const data = await Book.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})
app.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Book.findById({ _id: id });
        res.status(201).json(data);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }


})
app.patch("/:id", async (req, res) => {
    const data = req.body;
    console.log(data)


    try {
        const id = req.params.id;
        const update = await Book.findByIdAndUpdate(id, data);
        res.status(201).json(update)
        console.log(data)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
});
app.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Book.findByIdAndDelete(id);
        res.status(201).json(deleted)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})



