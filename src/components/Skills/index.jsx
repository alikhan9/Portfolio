import React, { useEffect, useState, lazy } from 'react'
import { FaReact, FaVuejs, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiJava, SiPostgresql, SiCss3, SiTailwindcss, SiFirebase, SiSpringboot } from 'react-icons/si'
import { DiJavascript1,DiBootstrap } from 'react-icons/di'
import { AiOutlineConsoleSql } from 'react-icons/ai'
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
    setTimeout(() => {
      manageFade();
      manageFade2();
    }, 3700)
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
              Développeur web passionné et polyvalent, je recherche une opportunité au sein d'une entreprise dynamique.
              <p className='lg:text-3xl md:text-3xl text-2xl py-4 font-thin text-gray-300'>
                Expert en front-end et back-end, je maîtrise les langages et frameworks modernes. Ma passion pour l'expérience utilisateur et mon esprit d'équipe font de moi un collaborateur précieux.
              </p>
              <p className='lg:text-3xl md:text-3xl text-2xl font-thin text-gray-300'>
                Je suis prêt à relever de nouveaux défis et contribuer à votre succès. Contactez-moi pour discuter de notre collaboration.
              </p>
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
                <FaPhp style={{ color: 'purple' }} className='icons' />
                <p>Php</p>
              </li>
              <li className='skill-2-5 flex flex-col justify-center items-center'>
                <SiJava style={{ color: 'hsl(39, 82%, 48%)' }} className='icons' />
                <p>Java</p>
              </li>
              <li className='skill-6 flex flex-col justify-center items-center'>
                <FaLaravel style={{ color: '#ff7b00' }} className='icons' />
                <p>Laravel</p>
              </li>
              <li className='skill-3 flex flex-col justify-center items-center'>
                <SiPostgresql style={{ color: '#0d7bf1' }} className='icons' />
                <p>PostgreSQL</p>
              </li>
              <li className='skill-4 flex flex-col justify-center items-center'>
                <SiSpringboot style={{ color: 'hsl(122, 80%, 60%)' }} className='icons' />
                <p>SpringBoot</p>
              </li>
              <li className='skill-5 flex flex-col justify-center items-center'>
                <SiFirebase style={{ color: 'orange' }} className='icons' />
                <p>Firebase</p>
              </li>
            </ul>
          </div>
          {/* <div className='info-user max-w-[20%] 2xl:text-5xl hidden lg:flex text-4xl'>
            <BsArrowLeft className='icon-arrow 2xl:min-w-[10%] max-w-[33%]' />
            <div className='max-w-[33%]'>Cliquez</div>
            <BsArrowRight className='icon-arrow max-w-[33%] 2xl:min-w-[10%]' />
          </div> */}
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
                <FaVuejs style={{ color: '#79ec0e' }} className='icons' />
                <p>Vue</p>
              </li>
              <li className='skill-5 flex flex-col justify-center items-center'>
                <DiBootstrap style={{ color: '#eca90e' }} className='icons' />
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