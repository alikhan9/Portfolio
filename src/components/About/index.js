import './index.scss'
import { useEffect, lazy } from 'react'
import Loader from 'react-loaders'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useStateIfMounted } from 'use-state-if-mounted';

const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));

const About = () => {
  const [letterClass, setLetterClass] = useStateIfMounted('text-animate')
  const [isLoading, setIsLoading] = useStateIfMounted(true);
  
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setIsLoading(false);
    }, 3000)
  }, [])

  return (
    <>
      <div>
        <div className="container about-page">
          <div className="text-zone">
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
          {isLoading ? null : <Particles
            className='particles'
            id="tsparticles"
            init={particlesInit}
            options={{
              fullscreen:{
                enable:false,
                zIndex:-1
              },
              background: {
                color: {
                  value: "hsl(200,6%,10%)",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  maxspeed: 5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />}
        </div>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About;