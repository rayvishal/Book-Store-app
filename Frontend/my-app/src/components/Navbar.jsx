import { Link } from 'react-router-dom'
// import { Navbar, Nav } from 'react-bootstrap';
import React from "react"
export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{ backgroundColor: "black" }}>
                {/* Left Side */}
                <div className="navbar-nav">
                    <Link to="/" className="nav-link"  >
                        <h2 style={{ fontFamily: "cursive", color: "white" }}>HOME</h2>
                    </Link>

                </div>

                {/* Right Side */}
                <div className="ml-auto">
                    <div className="navbar-nav">
                        <Link to="addbook" className="nav-link" href="#">
                            <h5 style={{ fontFamily: "cursive", color: "white" }}>ADD PRODUCT</h5>
                        </Link>
                        <Link to="books" className="nav-link" href="#">
                            <h5 style={{ fontFamily: "cursive", color: "white" }}>BOOKS</h5>

                        </Link>
                        <Link to="about" className="nav-link" href="#">
                            <h5 style={{ fontFamily: "cursive", color: "white" }}>ABOUT US</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>



    </>
}