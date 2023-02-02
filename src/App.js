import './App.css';
import { useLocation, Routes, Route, Link } from "react-router-dom";
import SplashScreen from './SplashScreen/SpashScreen';
import Work from './routes/Work/Work.js';
import About from './routes/About/About.js';
import Contact from './routes/Contact/Contact.js';
import Blog from './routes/Blog/Blog.js';
import { useEffect, useState } from 'react';
import Music from './routes/Work/Music/Music';
import WebDev from './routes/Work/WebDev/WebDev';
import Creative from './routes/Work/Creative/Creative';
import { blogs } from './blogObject';
import BlogPost from './routes/Blog/BlogPost/BlogPost';



function App() {
  const [currentPage, setCurrentPage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let locationString = `${location.pathname.slice(1)}-link`;
    const links = Array.prototype.slice.call(document.getElementsByClassName('nav-link'));
    for (const i in links) {
      if (links[i].classList.contains(locationString)) {
        links[i].classList.add('underline');
      } else {
        if (links[i].classList.contains('underline')) {
          links[i].classList.remove('underline')
        }
      }
    }
    console.log(links);
  }, [location])

  return (
    <div className="app">
      <SplashScreen />
      <header className="app-header flex-row">
        <nav >
          <ul className='flex-row'>
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
          <Link to="/"><h1 className='top-title'>lindsay k. johnston</h1></Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/work/music' element={<Music />} />
          <Route path='/work/web-dev' element={<WebDev />} />
          <Route path='/work/creative' element={<Creative />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />

          {Object.keys(blogs).map((UUID) => {
              return (
                <Route path={`blog/${UUID}`} element={<BlogPost />} />
              )
            })
            }
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
