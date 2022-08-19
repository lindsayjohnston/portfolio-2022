import './App.css';
import Tile from './Tile/Tile';
import { useLocation, Routes, Route, Link } from "react-router-dom";
import SplashScreen from './routes/SplashScreen/SpashScreen';
import Work from './routes/Work/Work.js';
import About from './routes/About/About.js';
import Contact from './routes/Contact/Contact.js';
import Blog from './routes/Blog/Blog.js';
import { useEffect, useState } from 'react';

let testArray = Array(12).fill(0);

function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const location = useLocation();
  
  useEffect(()=>{
    let locationString = `${location.pathname.slice(1)}-link`;
    const links = Array.prototype.slice.call(document.getElementsByClassName('nav-link'));
    for(const i in links){
      if(links[i].classList.contains(locationString)){
        links[i].classList.add('underline');
      } else {
        if(links[i].classList.contains('underline')){
          links[i].classList.remove('underline')
        }
      } 
    }
    console.log(links);
  },[location])
  
  return (
    <div className="app">
      <SplashScreen/> 
      <h1 className='top-title'>lindsay k.</h1>
      <h1 className='right-title'>johnston</h1>
      <header className="app-header flex-row">
        <nav >
          <ul className='flex-row'>
            <li className='work-link nav-link'>
              <Link to="/">Work</Link>
            </li>
            <li className='about-link nav-link'>
              <Link to="/about">About</Link>
            </li>
            <li className='blog-link nav-link'>
              <Link to="/blog">Blog</Link>
            </li>
            <li className='contact-link nav-link'>
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
