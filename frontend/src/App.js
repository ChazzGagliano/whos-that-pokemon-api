import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hard from "./components/Hard"
import Easy from "./components/Easy"



function App() {
    return (
      <Router>
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
