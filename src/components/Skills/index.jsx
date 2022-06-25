import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/index';
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiJava, SiPostgresql, SiCss3, SiAntdesign } from 'react-icons/si'
import { DiJavascript1, DiHtml5, DiNodejs } from 'react-icons/di'
import './index.scss'

export const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [fade, setFade] = useState(false);
  const [fade2, setFade2] = useState(false);

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
      <div className="container  skills-page  ">
        <div className="skills-zone">
          <div>
            <button onClick={() => setFade(!fade)} >
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['B', 'a ', 'c', 'k', '-', 'e', 'n ', 'd']}
              idx={15}
            /></button>
            <ul className={fade ?"fade-in" : "fade-out"}>
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
          <div>
          <button onClick={() => setFade2(!fade2)} >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['F', 'r ', 'o', 'n', 't', '-', 'e ', 'n', 'd']}
                idx={15}
              />
            </button>
            <ul className={fade2 ?"fade-in" : "fade-out"}>
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
