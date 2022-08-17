import './App.css';
import Tile from './Tile/Tile';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Work from './routes/Work/Work.js';

let testArray = Array(12).fill(0);

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Lindsay K. Johnston</h1>
    
          <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
            </ul>
            
          </nav>
        
      </header>
      <Routes>
    <Route path='/' element= {<div>test</div>} />
      <Route path='/work' element= {<Work/>} />

    </Routes>
    </div>
  );
}

export default App;
