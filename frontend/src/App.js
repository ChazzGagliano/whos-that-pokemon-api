import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hard from "./components/Hard"
import Easy from "./components/Easy"
import Johto from "./components/Johto"
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
              <Route path="/easy" element={<Easy />} />
              <Route path="/johto" element={<Johto />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;
