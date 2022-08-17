import './App.css';
import Tile from './Tile/Tile';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Work from './routes/Work/Work.js';

let testArray = Array(12).fill(0);

function App() {
  return (
    <div className="app"> 
      <h1 className='top-title'>lindsay k.</h1>
      <h1 className='right-title'>johnston</h1>
      <header className="app-header flex-row">
          <nav >
            <ul className='flex-row'>
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
            </ul>
          </nav>
      </header>
      <main>
      <Routes>
    <Route path='/' element= {<div className='test-div'>test</div>} />
      <Route path='/work' element= {<Work/>} />
    </Routes>

      </main>

    </div>
  );
}

export default App;
