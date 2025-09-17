import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About.js';
import Projects from './Projects.js';
import ProjectDetail from './ProjectDetail.js';
import Blog from './Blog.js';
import ContactForm from './ContactForm.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} /> 
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
