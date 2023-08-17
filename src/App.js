import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact"
import ConditionalRendering from "./ConditionalRendering";
import LogicalAnd from "./LogicalAnd";
import ConditionalRenderingUpdate from "./ConditionalRenderingUpdate";

function App() {
  return (
    <div> 

	  <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to='/contact' className="nav-item">Contact </Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <ConditionalRendering/>
      <ConditionalRenderingUpdate/>
    </div>
  );
};

export default App;
