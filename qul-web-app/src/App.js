import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.js';
import Home from './Pages/Home.js';
import Contact from './Pages/Contact.js';
import Reviews from './Pages/Reviews.js';
import Post from './Pages/Post.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;