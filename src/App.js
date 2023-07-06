import './App.css';
import { useLocation, Routes, Route, Link, Navigate } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import SplashScreen from './SplashScreen/SpashScreen';
import Work from './routes/Work/Work.js';
import About from './routes/About/About.js';
import Contact from './routes/Contact/Contact.js';
import { useEffect, useState } from 'react';
import Music from './routes/Work/Music/Music';
import WebDev from './routes/Work/WebDev/WebDev';
import Creative from './routes/Work/Creative/Creative';
import BlogNew from './routes/BlogNew/BlogNew'
import BlogPostNew from './routes/BlogNew/BlogPostNew/BlogPostNew';
import SignIn from './routes/SignIn/SignIn';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';
import BlogEditor from './routes/BlogEditor/BlogEditor';
import BlogListPreview from './routes/BlogPreview/BlogListPreview';
import BlogPostPreview from './routes/BlogPreview/BlogPostPreview/BlogPostPreview';
import BikePage from './routes/BikePage/BikePage';

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (authenticatedUser) {
      setTimeout(() => {
        alert("You will be logged out soon in 10 minutes. Save your work.")
      }, 60000 * 50)
      setTimeout(() => {
        setAuthenticatedUser(false)
      }, 60000 * 60)
    }
  }, [authenticatedUser])

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
  }, [location])

  return (
    <div className="app" id="app">
      <SplashScreen />
      <header className="app-header flex-row">
        <nav >
          <ul className='flex-row'>
            <li className='home-link nav-link'>
              <Link to="/">Home</Link>
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
          <h1 className='top-title'>lindsay k. johnston</h1>
        </nav>
      </header>
      <main id="main">
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/work/music' element={<Music />} />
          <Route path='/work/web-dev' element={<WebDev />} />
          <Route path='/work/creative' element={<Creative />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<BlogNew />} />
          <Route path='blog/:blogSlug' element={<BlogPostNew />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bike' element={<BikePage/>} />
          <Route path='/sign-in/*' element={<SignIn setAuthenticatedUser={setAuthenticatedUser} authenticatedUser={authenticatedUser} />} />
          <Route path='/blog-editor' element={
            <ProtectedRoute authRoute={'/sign-in'} authenticatedUser={authenticatedUser}>
              <BlogEditor setAuthenticatedUser={setAuthenticatedUser} />
            </ProtectedRoute>
          } />
          <Route path='/blog-preview' element={
            <ProtectedRoute authRoute={'/sign-in'} authenticatedUser={authenticatedUser}>
              <BlogListPreview setAuthenticatedUser={setAuthenticatedUser} />
            </ProtectedRoute>
          } />
          <Route path='/blog-preview/:blogSlug' element={
            <ProtectedRoute  authRoute={'/sign-in'} authenticatedUser={authenticatedUser}>
              <BlogPostPreview setAuthenticatedUser={setAuthenticatedUser} />
            </ProtectedRoute>
          } />
          <Route path="*" element={<div>Oops! Nothing to see here.</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
