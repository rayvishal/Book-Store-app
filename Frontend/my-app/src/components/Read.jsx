
import React from 'react';
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const Card = ({ title, description, imageUrl, onClick }) => {
    const [data, setData] = useState([]);
    const cardStyle = {
        // backgroundColor: "black",
        width: '300px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    };

    const contentStyle = {
        padding: '16px',
    };

    const titleStyle = {
        fontSize: '1 rem',
        marginBottom: '8px',

    };

    const descriptionStyle = {
        color: '#666',
        fontWeight: "bold"

    };

    const buttonStyle = {
        backgroundColor: '#4caf50',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    async function getAllData() {
        const newdata = await axios.get("http://localhost:5000/")
        setData(newdata.data)
    }
    // getAllData()
    useEffect(() => {
        getAllData()
    }, [])
    async function handleDelete(id) {

        await axios.delete(`http://localhost:5000/${id}`)
        console.log("deleted")
        getAllData()
    }


    return (<>
        <div className="row">
            {data ? data.map((e, key) => {
                return <div key={key} className="col-sm-3">
                    {console.log(e.Image)}
                    <div style={cardStyle}>
                        <img src={e.Image} alt={title} style={imageStyle} />
                        <div style={contentStyle}>
                            <p style={titleStyle}>{`By ${e.Author}`}</p>
                            <h6 style={titleStyle}>{e.Name}</h6>
                            <p style={descriptionStyle}>{e.Description}</p>
                            <p style={descriptionStyle}>{`Rs ${e.Price}`}</p>
                            <Link to={`/${e._id}`}><button onClick={onClick} style={buttonStyle}>
                                UPDATE
                            </button></Link>
                            <button onClick={() => { handleDelete(e._id) }} style={{ marginLeft: "90px", backgroundColor: "#4caf50", color: "white", padding: "8px 12px", cursor: "pointer", borderRadius: "4px", border: "none" }}>
                                DELETE
                            </button>


                        </div>
                    </div>

                </div>
            }) : null}

        </div>


    </>
    );
};

export default Card;
