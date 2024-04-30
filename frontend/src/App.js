import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hard from "./components/Hard"
import Easy from "./components/Easy"
import Navigation from "./components/Navigation.js";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
    return (
      <Router>
        <Navigation/>
        <div className="App">
          <div className="App-body">
            <Routes>
              <Route path="/pokemon/hard" element={<Hard />} />
              <Route path="/pokemon/easy" element={<Easy />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;
