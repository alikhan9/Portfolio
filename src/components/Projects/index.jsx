import './index.scss'

import React, { lazy, useEffect, useState } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted';
import crypto from '../../images/crypto.png';
import chatApp from '../../images/chatApp.png'
import admin from '../../images/admin.png'
import reactImg from '../../images/react.png'
import Loader from 'react-loaders';
import Carousel from 'better-react-carousel';
import { RiErrorWarningLine } from 'react-icons/ri'

const AnimatedLoading = lazy(() => import('../AnimatedLoading/index.jsx'));
const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));


const Projects = () => {

  const [letterClass, setLetterClass] = useStateIfMounted('text-animate');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500)
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4500)
  }, [])

  return (
    <div className='overflow-hidden'>
      {loading ? <AnimatedLoading /> :
        <div className="flex flex-col justify-center xl:gap-20 overflow-x-hidden gap-20 md:gap-4 items-center xl:h-[100vh] w-[100vw] mx-16 xl:mr-28">
          <div className="">
            <h1 className='lg:text-7xl text-6xl xl:my-5 md:my-20 mt-16 mb-5 text-[#ffd700]'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 't', 's ']}
                idx={7}
              />
            </h1>
          </div>
          <div className='w-[90%] md:py-0 py-2 md:mr-0 mr-16'>
            <Carousel cols={1} rows={1} gap={20}>
              <Carousel.Item>
                <div className='flex xl:flex-row flex-col xl:gap-16 gap-2 xl:items-center justify-center'>
                  <div>
                    <img src={chatApp} alt="..." className='xl:w-[800px] xl:h-[600px] md:max-h-[500px] xl:max-h-full w-full rounded-lg' />
                  </div>
                  <div className='text-gray-200 tracking-wide xl:min-w-[500px] w-full xl:max-w-[500px] px-4 rounded-lg xl:h-[750px] bg-[hsl(200,6%,15%)] text-3xl flex flex-col justify-center'>
                    <div className='flex xl:flex-col gap-6 md:flex-row flex-col'>
                      <div className='min-w-[50%]'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Qu'est ce que c'est?</h2>
                        <div className='xl:px-4 font-thin'>
                          <p className='xl:px-4 pb-2'>C'est une simple application de chat avec les fonctionnalités suivantes : </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>Création de compte </li>
                            <li className='py-2'>Connexion et déconnexion</li>
                            <li className='py-2'>Création ou suppression  de groupe</li>
                            <li className='py-2'>Rejoindre ou quitter n'importe quel groupe</li>
                            <li className='py-2'>Ajout ou suppression de contact</li>
                            <li className='py-2'>Trier contact selon nom de groupe / utilisateur</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>Le Front-end a été réalisé avec <span className='text-[#ffd700]'>React</span>, l'envoi de messages se fait avec Stompjs et le style avec <span className='text-[#ffd700]'>scss</span>.</p>
                          <p className='py-2'>Le Back-end a été fait avec <span className='text-[#ffd700]'>Springboot</span> et la base de données avec <span className='text-[#ffd700]'>PostgreSQL</span>.</p>
                          <p>Le tout est hébergé sur <span className='text-[#ffd700]'>AWS</span>.</p>
                          <p className='flex pt-6 gap-2 '><RiErrorWarningLine className='inline tracking-normal p-0 m-0 min-h-full' color={"red"} size={50} /> Attention cette app n'est disponible que du Lundi au Vendredi de 8h00 à 18h00.</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center gap-10 pt-16 mb-6'>
                      <a href='https://chatapp.alikhan-zaipoulaiev.fr/' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Live demo</button>
                      </a>
                      <a href='https://github.com/alikhan9/chat-app' className='' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Front-end</button>
                      </a>
                      <a href='https://github.com/alikhan9/springboot-chat-api' className='second_button' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Back-end</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='flex xl:flex-row flex-col xl:gap-16 gap-2 xl:items-center justify-center'>
                  <div>
                    <img src={admin} alt="..." className='xl:w-[800px] xl:h-[600px] md:max-h-[500px] xl:max-h-full w-full rounded-lg' />
                  </div>
                  <div className='text-gray-200 tracking-wide xl:min-w-[500px] w-full xl:max-w-[500px] px-4 rounded-lg xl:h-[750px] bg-[hsl(200,6%,15%)] text-3xl flex flex-col justify-center'>
                    <div className='flex xl:flex-col gap-4 md:flex-row flex-col'>
                      <div className='min-w-[50%]'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Qu'est ce que c'est?</h2>
                        <div className='xl:px-4 font-thin'>
                          <p className='xl:px-4 pb-2'>Cette application permet de gérer le Chatapp. Les fonctionnalités sont : </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>Connexion et déconnexion au compte admin</li>
                            <li className='py-2'>Visualisation de l'état global de l'api</li>
                            <li className='py-2'>Créer, modifier, supprimer et visualiser les utilisateurs</li>
                            <li className='py-2'>Créer, modifier, supprimer et visualiser les groupes</li>
                            <li className='py-2'>Créer, modifier, supprimer et visualiser les contacts des utilisateurs</li>
                            <li className='py-2'>Créer, modifier, supprimer et visualiser les messages personnels et des groupes</li>
                          </ul>
                        </div>
                      </div>
                      <div className='min-w-[50%]'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>Le Front-end a été réalisé avec <span className='text-[#ffd700]'>React</span> et le style avec <span className='text-[#ffd700]'>Bootstrap</span>, plus précisément <span className='text-[#ffd700]'>MUI</span>.</p>
                          <p className='py-2'>Le Back-end a été fait avec <span className='text-[#ffd700]'>Springboot</span> et la base de données avec <span className='text-[#ffd700]'>PostgreSQL</span>.
                            C'est la même api que pour le ChatApp, mais la partie administrative n'est disponible que'avec compte administrateur.</p>
                          <p>Le front-end est hébergé sur <span className='text-[#ffd700]'>Firebase</span> et le back-end sur <span className='text-[#ffd700]'>AWS</span>.</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center gap-10 pt-16 mb-6'>
                      <a href='https://admin.alikhan-zaipoulaiev.fr/' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Live demo</button>
                      </a>
                      <a href='https://github.com/alikhan9/admin' className='' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Front-end</button>
                      </a>
                      <a href='https://github.com/alikhan9/springboot-chat-api' className='second_button' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Back-end</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='flex xl:flex-row flex-col xl:gap-16 gap-2 justify-center xl:items-center'>
                  <div>
                    <img src={crypto} alt="..." className='xl:w-[800px] xl:h-[600px] md:max-h-[500px] xl:max-h-full w-full rounded-lg' />
                  </div>
                  <div className='text-gray-200 tracking-wide xl:min-w-[500px] w-full xl:max-w-[500px] px-4 rounded-lg xl:h-[750px] bg-[hsl(200,6%,15%)] text-3xl flex flex-col justify-center'>
                    <div className='flex xl:flex-col gap-4 md:flex-row flex-col'>
                      <div className='md:max-w-[50%] xl:max-w-none'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Qu'est ce que c'est?</h2>
                        <div className='xl:px-4 font-thin'>
                          <p className='xl:px-4 pb-2'>C'est une application qui track les différents crypto monnaie.
                            Les données sont obtenues via l'api <a href="https://www.coingecko.com/fr" className='text-[#ffd700]' target="_blank" rel="noreferrer" >Coin Gecko</a>.
                            Cette application comprend :
                          </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>Création de compte </li>
                            <li className='py-2'>Connexion et déconnexion</li>
                            <li className='py-2'>Affichage des crypto-monnaies selon leur classement général</li>
                            <li className='py-2'>Affichage des crypto-monnaies populaires du moment</li>
                            <li className='py-2'>Visualiser plus en détails une monnaie en cliquant dessus</li>
                            <li className='py-2'>Possibilité d'ajouter / supprimer une crypto-monnaie dans la liste de favoris</li>
                          </ul>
                        </div>
                      </div>
                      <div className='min-w-[50%'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>Le Front-end a été réalisé avec <span className='text-[#ffd700]'>React</span> et le style avec <span className='text-[#ffd700]'>TailwindCss</span>.</p>
                          <p className='py-2'>Le Back-end a été fait avec <span className='text-[#ffd700]'>Firebase</span>.</p>
                          <p>Le tout est hébergé sur <span className='text-[#ffd700]'>Firebase</span>.</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center gap-10 pt-16 mb-6'>
                      <a href='https://crypto.alikhan-zaipoulaiev.fr' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Live demo</button>
                      </a>
                      <a href='https://github.com/alikhan9/CryptoTracker' className='' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='flex xl:flex-row flex-col xl:gap-16 gap-2 justify-center xl:items-center'>
                  <div>
                    <img src={reactImg} alt="..." className='xl:w-[800px] xl:h-[600px] md:max-h-[500px] xl:max-h-full w-full rounded-lg' />
                  </div>
                  <div className='text-gray-200 tracking-wide xl:min-w-[500px] w-full xl:max-w-[500px] px-4 rounded-lg xl:h-[750px] bg-[hsl(200,6%,15%)] text-3xl flex flex-col justify-center'>
                    <div className='flex xl:flex-col gap-4 md:flex-row flex-col'>
                      <div className='md:max-w-[50%] xl:max-w-none'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Qu'est ce que c'est?</h2>
                        <div className='xl:px-4 font-thin'>
                          <p className='xl:px-4 pb-2'>C'est un site vitrine sans aucun back-end.<br /> Il contient :
                          </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>Une page d'acceuil </li>
                            <li className='py-2'>Une page d'information</li>
                            <li className='py-2'>Une page de prix</li>
                          </ul>
                        </div>
                      </div>
                      <div className='min-w-[50%'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>Le Front-end a été réalisé avec <span className='text-[#ffd700]'>React</span> et le style avec <span className='text-[#ffd700]'>TailwindCss</span>.</p>
                          <p>Le site est hébergé sur <span className='text-[#ffd700]'>Firebase</span>.</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center gap-10 pt-16 mb-6'>
                      <a href='https://react.alikhan-zaipoulaiev.fr/' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Live demo</button>
                      </a>
                      <a href='https://github.com/alikhan9/react-vitrine' className='' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>GitHub</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      }
    </div>

  )
}

export default Projects;