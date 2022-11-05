import React, { useEffect, useState, lazy } from 'react'
import { FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiJava, SiPostgresql, SiCss3, SiTailwindcss, SiFirebase } from 'react-icons/si'
import { DiJavascript1, DiHtml5 } from 'react-icons/di'
import { BsArrowLeft, BsArrowRight, BsBootstrap } from 'react-icons/bs'
import './index.scss'
import { useStateIfMounted } from 'use-state-if-mounted';

const AnimatedLoading = lazy(() => import('../AnimatedLoading/index.jsx'));
const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));


const Skills = () => {

  const [letterClass, setLetterClass] = useStateIfMounted('text-animate')

  const [fade, setFade] = useState(1);

  const [fade2, setFade2] = useState(1);

  const [classBtn1, setClassBtn1] = useState('hideBtn');

  const [classBtn2, setClassBtn2] = useState('hideBtn');

  const [loading, setLoading] = useState(true);

  const [counter, setCounter] = useState(0);

  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 750)

    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4250)
  }, [])

  useEffect(() => {
    if (counter !== 0) {
      if (fade === 1) {
        setClassBtn1('fade-in');
      }
      if (fade === true) {
        setClassBtn1('fade-in');
      } else
        setClassBtn1('fade-out');
    } else {
      setCounter(1);
    }
  }, [fade])

  useEffect(() => {
    if (counter2 !== 0) {
      if (fade2 === 1) {
        setClassBtn2('fade-in');
      }
      if (fade2 === true) {
        setClassBtn2('fade-in');
      } else
        setClassBtn2('fade-out');
    } else {
      setCounter2(1);
    }
  }, [fade2])

  const manageFade = () => {
    if (fade === 1) {
      setFade(true);
      return;
    }
    setFade(!fade);
  }

  const manageFade2 = () => {
    if (fade2 === 1) {
      setFade2(true);
      return;
    }
    setFade2(!fade2);
  }

  return (
    <div>
      {loading ? <AnimatedLoading /> : <div className="relative flex flex-col max-w-[100%] md:gap-10 gap-[120px] justify-between h-[100%] lg:h-[80vh] lg:justify-between items-center ">
        <div className="text-zones lg:mt-32 md:max-h-[200px]">
          <div className='flex justify-center mt-20 lg:justify-start'>
            <h1 className='lg:text-8xl text-6xl'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', ' ', 'p', 'r', 'o', 'p', 'o ', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i']}
                idx={15}
              />
            </h1>
          </div>

          <div className='text-justify flex flex-col justify-center'>
            <p className='lg:text-3xl md:text-3xl text-2xl font-thin text-gray-300'>
              Je suis un développeur web à la recherche d'un poste dans une entreprise établie ou une start-up.
            </p>
            <p className='lg:text-3xl md:text-3xl text-2xl py-4 font-thin text-gray-300'>
              Je suis confiant, curieux et toujours à l'affût pour améliorer mes compétences.
            </p>
            <p className='lg:text-3xl md:text-3xl text-2xl font-thin text-gray-300'>
              Je peux faire du front-end comme du back-end.
            </p>
          </div>

        </div>
        <div className="skills-zone max-w-[70%] max-h-[80%] lg:max-h-none">
          <div>
            <button
              className={fade === true ? "show-button" : null}
              onClick={() => { manageFade() }} >
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['B', 'a ', 'c', 'k', '-', 'e', 'n ', 'd']}
                idx={15}
              /></button>
            <ul className={classBtn1}>
              <li className='skill-1 flex flex-col justify-center items-center'>
                <SiSpringboot style={{ color: 'hsl(122, 80%, 60%)' }} className='icons' />
                <p>Spring Boot</p>
              </li>
              <li className='skill-2-5 flex flex-col justify-center items-center'>
                <SiJava style={{ color: 'hsl(39, 82%, 48%)' }} className='icons' />
                <p>Java</p>
              </li>
              <li className='skill-6 flex flex-col justify-center items-center'>
                <FaAws style={{ color: '#ffd415' }} className='icons' />
                <p>AWS</p>
              </li>
              <li className='skill-3 flex flex-col justify-center items-center'>
                <SiPostgresql style={{ color: '#0d7bf1' }} className='icons' />
                <p>PostgreSQL</p>
              </li>
              <li className='skill-4 flex flex-col justify-center items-center'>
                <FaDocker style={{ color: '#011122' }} className='icons' />
                <p>Docker</p>
              </li>
              <li className='skill-5 flex flex-col justify-center items-center'>
                <SiFirebase style={{ color: 'orange' }} className='icons' />
                <p>Firebase</p>
              </li>
            </ul>
          </div>
          <div className='info-user max-w-[20%] 2xl:text-5xl hidden lg:flex text-4xl'>
            <BsArrowLeft className='icon-arrow 2xl:min-w-[10%] max-w-[33%]' />
            <div className='max-w-[33%]'>Cliquez</div>
            <BsArrowRight className='icon-arrow max-w-[33%] 2xl:min-w-[10%]' />
          </div>
          <div>
            <button
              className={fade2 === true ? "show-button" : null}
              onClick={() => manageFade2()}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['F', 'r ', 'o', 'n', 't', '-', 'e ', 'n', 'd']}
                idx={15}
              />
            </button>
            <ul className={classBtn2}>
              <li className='skill-1 flex flex-col justify-center items-center'>
                <FaReact style={{ color: 'hsl(240, 80%, 60%)' }} className='icons' />
                <p>React</p>
              </li>
              <li className='skill-2-5 flex flex-col justify-center items-center'>
                <SiCss3 style={{ color: '#e6cd0f' }} className='icons' />
                <p>CSS3</p>
              </li>
              <li className='skill-6-5 flex flex-col justify-center items-center'>
                <SiTailwindcss style={{ color: 'blue' }} className='icons' />
                <p>TailwindCss</p>
              </li>
              <li className='skill-3-5 flex flex-col justify-center items-center'>
                <DiJavascript1 style={{ color: 'hsl(50, 100%, 40%)' }} className='icons' />
                <p>Javascript</p>
              </li>
              <li className='skill-4 flex flex-col justify-center items-center'>
                <DiHtml5 style={{ color: '#79ec0e' }} className='icons' />
                <p>HTML5</p>
              </li>
              <li className='skill-5 flex flex-col justify-center items-center'>
                <BsBootstrap style={{ color: '#eca90e' }} className='icons' />
                <p>Bootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Skills;