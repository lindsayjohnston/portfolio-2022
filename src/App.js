import './App.css';
import Tile from './Tile/Tile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from './routes/Work/Work.js';
import About from './routes/About/About.js';
import Contact from './routes/Contact/Contact.js';
import Blog from './routes/Blog/Blog.js';


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
              <Link to="/">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Work />}  />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
