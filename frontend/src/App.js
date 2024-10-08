import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hard from "./components/Hard"
import Easy from "./components/Easy"
import Johto from "./components/Johto"
import Pokedex from "./components/Pokedex.js"
import Pokemon from "./components/Pokemon.js"
import Signup from "./components/Signup.js"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Search from "./components/Search"
import Navigation from "./components/Navigation.js";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
    return (
      <Router>
        <Navigation/>
        <div className="App">
          <div className="App-body">
            <Routes>
              <Route path="/hard" element={<Hard />} />
              <Route path="/" element={<Easy />} />
              <Route path="/johto" element={<Johto />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/pokemon/:id" element={<Pokemon />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;
