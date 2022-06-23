import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/index';

export const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let isMounted = true;               // note mutable flag
    setTimeout(() => {
      if (isMounted) {
        setLetterClass('text-animate-hover');
      }
    }, 3100)
    return () => { isMounted = false };
  }, [])

  return (
    <div>
      <div className="container about-page skills-page  ">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o ', 'm', 'p', 'é', 't', 'e ', 'n', 'c', 'e','s']}
              idx={15}
            />
          </h1>
          <p className='bigger-text'>
            Je suis un développeur back-end à la recherche d'un poste dans une entreprise établie ou une start-up,
            avec la possibilité de travailler avec les dernières technologies.
          </p>
          <p className='bigger-text'>
            Je suis confiant, curieux et toujours à l'affût pour améliorer mes compétences.
          </p>
          <p className='bigger-text'>
            Je peux aussi faire du front-end même si cela n'est pas ma spécialité.
          </p>
        </div>
      </div>
      <Loader type='pacman' />
    </div>
  )
}
