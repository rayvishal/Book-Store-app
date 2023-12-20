import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create"
import Read from "./components/Read";
import Update from "./components/Update"
import Home from "./components/Home";
import About from "./components/About"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<Create />} />
          <Route path="/books" element={<Read />} />
          <Route path="/updatebook" element={<Update />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Update />} />
          <Route path="/books" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
