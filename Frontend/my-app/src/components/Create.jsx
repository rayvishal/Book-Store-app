import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function Create() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDecription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const navigate=useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        const sendData = async function () {
            const add = { name, author, description, price, image }
            console.log(add)
            try {

                await axios.post("http://localhost:5000/", add)
                // await axios.post("http://localhost:5000/", {
                //     Name: name,
                //     Author: author,
                //     Decription: Description,
                //     Price: price,  


                // })
                navigate("/books")

            }
            catch (error) {
                console.log(error.message)
            }
        }
        sendData()
    }
    return <>
        <div className="container my-6">
            <h4 className="text-center">Enter The Book Detail</h4>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className="form-control" id="Name" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input onChange={(e) => { setAuthor(e.target.value) }} value={author} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input onChange={(e) => setDecription(e.target.value)} value={description} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input value={price} type="Number" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPrice(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input onChange={(e) => { setImage(e.target.value) }} value={image} type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    </>
}