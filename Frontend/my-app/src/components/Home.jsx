import { Link } from 'react-router-dom'

export default function Home() {
    return <>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100vh" }}>
            <Link to="books"><button style={{ padding: " 10px 50px", fontSize: "20px", borderRadius: "8px", marginBottom: "30px", backgroundColor: "blue", color: "yellow", fontFamily: "cursive" }}>Click</button></Link>
            <p style={{ fontFamily: "cursive", color: "red" }}>View all the book we have in aur store by clicking the button above </p>
        </div >
    </>
}