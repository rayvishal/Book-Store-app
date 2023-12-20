
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Update() {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDecription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    // const [error,setEror]=useState("")
    const { id } = useParams();
    const navigate = useNavigate();


    // function handleUpdate(e) {

    //     e.preventDefault()

    // }
    const GetSingleUser = async function () {
        try {

            const response = await axios.get(`http://localhost:5000/${id}`)
            console.log(response.data)
            setName(response.data.Name);
            setAuthor(response.data.Author);
            setDecription(response.data.Description);
            setPrice(response.data.Price);
            setImage(response.data.Image);
        }
        catch (error) {
            console.log(error.message)
            console.log("errr")
        }
    }
    useEffect(() => {
        GetSingleUser()
    }, [])
    // GetSingleUser()
    const handleUpdate = async (e) => {
        const data = { name, author, description, price, image };
        console.log(data)
        e.preventDefault()
        try {
            const updateData = await axios.patch(`http://localhost:5000/${id}`, {
                Name: name,
                Author: author,
                Description: description,
                Price: price,
                Image: image
            })
            console.log(updateData.data)
            console.log("hello")
            navigate("/books")

        } catch (error) {
            console.log(error.message)
        }

    }

    return <>

        <div className="container my-6">
            <h4 className="text-center">Edit The Book Detail</h4>

            <form onSubmit={handleUpdate}>
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