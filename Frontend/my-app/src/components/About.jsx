export default function About() {
    return <>
        <div>
            <h5 style={{ padding: "10px", fontFamily: "cursive", marginBottom: "40px", marginTop: "20px" }}>This is a book store app where you can add new book by providing details and it will be added to the database list,you can also view all the books in the list and one can alse update the single book by clicking the update button and it also has a feature of deletion where you can delete the the book.</h5>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ol style={{ fontFamily: "cursive" }}>
                    <th >Technology used</th>

                    <li>In Frontend-React</li>
                    <li>In Backend-Nodejs</li>
                    <li>Database-Mongodb</li>

                </ol>
            </div>
        </div>
    </>
}