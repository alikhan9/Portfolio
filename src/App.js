import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./components/Home/index'));
const Layout = lazy(() => import('./components/Layout/index.js'));
const About = lazy(() => import('./components/About/index.js'));
const Contact = lazy(() => import('./components/Contact/index.jsx'));
const Skills = lazy(() => import('./components/Skills/index.jsx'));
const Projects = lazy(() => import('./components/Projects/index.jsx'));


function App() {

  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
