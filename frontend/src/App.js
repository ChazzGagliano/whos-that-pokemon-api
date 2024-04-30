import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemon from "./components/Easy"



function App() {
    return (
      <Router>
        <div className="App">
          <div className="App-body">
            <Routes>
              <Route path="/pokemon/easy" element={<Pokemon />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;
