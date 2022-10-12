import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
const Home = lazy(() => import('./components/Home/index'));
const Layout = lazy(() => import('./components/Layout/index.js'));
const Contact = lazy(() => import('./components/Contact/index.jsx'));
const Skills = lazy(() => import('./components/Skills/index.jsx'));
const Projects = lazy(() => import('./components/Projects/index.jsx'));


function App() {

  useEffect(() => {
    document.title = "Portfolio"
  }, [])

  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path='/' element={<> <Layout name={'home'}/><Home /> </>} />
          <Route path='/contact' element={<> <Layout name={'contact'}/><Contact /> </>} />
          <Route path='/skills' element={<> <Layout name={'skills'}/><Skills /> </>} />
          <Route path='/projects' element={<> <Layout name={'projects'}/><Projects /> </>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
