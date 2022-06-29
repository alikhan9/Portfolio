import './index.scss'

import React, { lazy, useEffect } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted';
import crypto from '../../images/crypto.png';
import Loader from 'react-loaders';

const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));


const Projects = () => {

  const [letterClass, setLetterClass] = useStateIfMounted('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000)
  }, [])


  return (
    <div>
      <div className="container about-page">
        <div className="text-zone-projects">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 't', 's ']}
              idx={7}
            />
          </h1>
        </div>
        <div className='container-projects'>
          <div className='container-image'>
            <div className='image-title'>Crypto Tracker</div>
            <img src={crypto} alt="logo" />
            <div className='container-buttons'>
              <a href='https://cryptobase-b031d.web.app/' target="_blank" rel="noreferrer">
                <button>Live demo</button>
              </a>
              <a href='https://github.com/alikhan9/CryptoTracker' target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
          <div className='container-image'>
            <div className='image-title'>Crypto Tracker</div>
            <img src={crypto} alt="logo" />
            <div className='container-buttons'>
              <a href='https://cryptobase-b031d.web.app/' target="_blank" rel="noreferrer">
                <button>Live demo</button>
              </a>
              <a href='https://github.com/alikhan9/CryptoTracker' target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
          <div className='container-image'>
            <div className='image-title'>Crypto Tracker</div>
            <img src={crypto} alt="logo" />
            <div className='container-buttons'>
              <a href='https://cryptobase-b031d.web.app/' target="_blank" rel="noreferrer">
                <button>Live demo</button>
              </a>
              <a href='https://github.com/alikhan9/CryptoTracker' target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </div>

  )
}

export default Projects;