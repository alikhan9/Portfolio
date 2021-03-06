import React, { useEffect, useState, lazy } from 'react'
import Loader from 'react-loaders'
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiJava, SiPostgresql, SiCss3, SiAntdesign } from 'react-icons/si'
import { DiJavascript1, DiHtml5, DiNodejs } from 'react-icons/di'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import './index.scss'
import { useStateIfMounted } from 'use-state-if-mounted';

const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));


const Skills = () => {
  const [letterClass, setLetterClass] = useStateIfMounted('text-animate')
  const [fade, setFade] = useState(false);
  const [fade2, setFade2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000)
  }, [])

  return (
    <div>
      <div className="container  skills-page   ">
        <div className="text-zones">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', ' ', 'p', 'r', 'o', 'p', 'o ', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i']}
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
        <div className="skills-zone">
          <div>
            <button
              className={fade ? "show-button" : null}
              onClick={() => setFade(!fade)} >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['B', 'a ', 'c', 'k', '-', 'e', 'n ', 'd']}
                idx={15}
              /></button>
            <ul className={fade ? "fade-in" : "fade-out"}>
              <li className='skill-1'>
                <SiSpringboot style={{ color: 'hsl(122, 80.39215686274508%, 60%)' }} className='icons' />
                <p>Spring Boot</p>
              </li>
              <li className='skill-2'>
                <SiJava style={{ color: 'hsl(39, 82.3293172690763%, 48.8235294117647%)' }} className='icons' />
                <p>Java</p>
              </li>
              <li className='skill-3'>
                <SiPostgresql style={{ color: '#0d7bf1' }} className='icons' />
                <p>PostgreSQL</p>
              </li>
              <li className='skill-4'>
                <FaDocker style={{ color: '#011122' }} className='icons' />
                <p>Docker</p>
              </li>
              <li className='skill-5'>
                <DiNodejs style={{ color: '#040a10' }} className='icons' />
                <p>Node</p>
              </li>
            </ul>
          </div>
          <div className='info-user'>
            <BsArrowLeft size={100} className='icon-arrow' />
            <div>Cliquez</div>
            <BsArrowRight size={100} className='icon-arrow second' />
          </div>
          <div>
            <button
              className={fade2 ? "show-button" : null}
              onClick={() => setFade2(!fade2)} >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['F', 'r ', 'o', 'n', 't', '-', 'e ', 'n', 'd']}
                idx={15}
              />
            </button>
            <ul className={fade2 ? "fade-in" : "fade-out"}>
              <li className='skill-1'>
                <FaReact style={{ color: 'hsl(240, 80%, 60%)' }} className='icons' />
                <p>React</p>
              </li>
              <li className='skill-2'>
                <SiCss3 style={{ color: '#e6cd0f' }} className='icons' />
                <p>CSS3</p>
              </li>
              <li className='skill-3'>
                <DiJavascript1 style={{ color: 'hsl(50, 100%, 40%)' }} className='icons' />
                <p>Javascript</p>
              </li>
              <li className='skill-4'>
                <DiHtml5 style={{ color: '#79ec0e' }} className='icons' />
                <p>Html5</p>
              </li>
              <li className='skill-5'>
                <SiAntdesign style={{ color: '#eca90e' }} className='icons' />
                <p>AntDesign</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </div>
  )
}

export default Skills;