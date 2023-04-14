import './index.scss'

import React, { lazy, useEffect, useState } from 'react'
import { useStateIfMounted } from 'use-state-if-mounted';
import crypto from '../../images/crypto.png';
import chatApp from '../../images/chatApp.png'
import admin from '../../images/admin.png'
import garage from '../../images/garage.PNG'
import admingarage from '../../images/admin-garage.PNG'
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
    }, 750)
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3750)
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
                <div className='flex xl:flex-row flex-col xl:gap-16 gap-2 justify-center xl:items-center'>
                  <div>
                    <img src={garage} alt="..." className='xl:w-[800px] xl:h-[600px] md:max-h-[500px] xl:max-h-full w-full rounded-lg' />
                  </div>
                  <div className='text-gray-200 tracking-wide xl:min-w-[500px] w-full xl:max-w-[500px] px-4 rounded-lg xl:h-[750px] bg-[hsl(200,6%,15%)] text-3xl flex flex-col justify-center'>
                    <div className='flex xl:flex-col gap-4 md:flex-row flex-col'>
                      <div className='md:max-w-[50%] xl:max-w-none'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Qu'est ce que c'est?</h2>
                        <div className='xl:px-4 font-thin'>
                          <p className='xl:px-4 pb-2'>Il s'agit d'un site Web pour un garage automobile proposant la vente de véhicules.
                            Ce site comprend les pages suivantes:
                          </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>Une page de présentation et de description des services proposés</li>
                            <li className='py-2'>Un catalogue de véhicules disponibles à la vente</li>
                            <li className='py-2'>Une page de contact</li>
                          </ul>
                        </div>
                      </div>
                      <div className='min-w-[50%'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>Le développement du Front-end a été réalisé à l'aide de la bibliothèque <span className='text-[#ffd700]'>React</span>,
                            tandis que le design a été implémenté à l'aide de <span className='text-[#ffd700]'>TailwindCss</span>.
                          </p>
                          <p className='mt-2'>
                            Le développement du Back-end a été réalisé en utilisant <span className='text-[#ffd700]'>Firebase</span>.
                            L'ensemble de l'application est hébergée sur <span className='text-[#ffd700]'>Firebase</span>.</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center gap-10 pt-16 mb-6'>
                      <a href='https://garage.alikhan-zaipoulaiev.fr' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Live demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='flex xl:flex-row flex-col xl:gap-16 gap-2 justify-center xl:items-center'>
                  <div>
                    <img src={admingarage} alt="..." className='xl:w-[800px] xl:h-[600px] md:max-h-[500px] xl:max-h-full w-full rounded-lg' />
                  </div>
                  <div className='text-gray-200 tracking-wide xl:min-w-[500px] w-full xl:max-w-[500px] px-4 rounded-lg xl:h-[750px] bg-[hsl(200,6%,15%)] text-3xl flex flex-col justify-center'>
                    <div className='flex xl:flex-col gap-4 md:flex-row flex-col'>
                      <div className='md:max-w-[50%] xl:max-w-none'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Qu'est ce que c'est?</h2>
                        <div className='xl:px-4 font-thin'>
                          <p className='xl:px-4 pb-2'>Il s'agit d'un site web administratif permettant la gestion des
                            véhicules proposés sur le site précédent.
                            Il comprend les fonctionnalités suivantes:
                            une page de connexion pour l'administrateur,
                            une page affichant un tableau récapitulatif de tous les véhicules proposés,
                            une page détaillée pour chaque véhicule permettant des modifications et mises à jour, et
                            une page pour l'ajout de nouveaux véhicules.
                          </p>
                        </div>
                      </div>
                      <div className='min-w-[50%'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>
                            L'interface utilisateur a été développée en utilisant la bibliothèque <span className='text-[#ffd700]'>React</span> et
                            la mise en forme a été implémentée à l'aide de <span className='text-[#ffd700]'>TailwindCss</span>.
                          </p>
                          <p className='mt-2'>
                            Le Back-end de l'application a été conçu à l'aide de <span className='text-[#ffd700]'>Firebase</span>,
                            et l'application elle-même est hébergée sur la plateforme <span className='text-[#ffd700]'>Firebase</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center gap-10 pt-16 mb-6'>
                      <a href='https://garage-admin.alikhan-zaipoulaiev.fr' target="_blank" rel="noreferrer">
                        <button className='bg-[#ffd700] md:p-4 p-2 md:px-8 md:text-4xl text-2xl rounded-md text-black'>Live demo</button>
                      </a>
                    </div>
                    <div className='text-center p-2'>
                      Les identifiants pour se connecter sont :
                      <p>test@test.com </p>
                      <p>password</p>
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
                          <p className='xl:px-4 pb-2'>Il s'agit d'une application de suivi des différentes crypto-monnaies.
                            Les données sont obtenues via l'API Coin Gecko.
                            Les fonctionnalités incluent :
                          </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>La création d'un compte utilisateur</li>
                            <li className='py-2'>L'affichage des crypto-monnaies classées par ordre général</li>
                            <li className='py-2'>L'affichage des crypto-monnaies populaires actuellement</li>
                            <li className='py-2'>La visualisation de détails supplémentaires d'une crypto-monnaie en cliquant dessus</li>
                            <li className='py-2'>Visualiser plus en détails une monnaie en cliquant dessus</li>
                            <li className='py-2'>La possibilité d'ajouter ou de supprimer une crypto-monnaie de la liste des favoris</li>
                          </ul>
                        </div>
                      </div>
                      <div className='min-w-[50%'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                          <p>
                            L'interface utilisateur a été développée en utilisant la bibliothèque <span className='text-[#ffd700]'>React</span> et
                            la mise en forme a été implémentée à l'aide de <span className='text-[#ffd700]'>TailwindCss</span>.
                          </p>
                          <p className='mt-2'>
                            Le Back-end de l'application a été conçu à l'aide de <span className='text-[#ffd700]'>Firebase</span>,
                            et l'application elle-même est hébergée sur la plateforme <span className='text-[#ffd700]'>Firebase</span>.
                          </p>
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

                          

                          <p className='xl:px-4 pb-2'>
                            Il s'agit d'un site web statique qui n'utilise pas de technologies de back-end.
                            Il comprend les pages suivantes:
                          </p>
                          <ul className='list-disc marker:text-[#ffd700] px-12'>
                            <li className='py-2'>Une page d'accueil présentant les informations de base de l'entreprise</li>
                            <li className='py-2'>Une page d'informations détaillant les services ou produits proposés,
                            </li>
                            <li className='py-2'>Une page de tarification qui affiche les prix des produits ou services proposés.</li>
                          </ul>
                        </div>
                      </div>
                      <div className='min-w-[50%'>
                        <h2 className='text-4xl py-4 text-blue-500 tracking-wider xl:text-center'>Avec quoi cela a été fait?</h2>
                        <div className='xl:px-8 font-thin'>
                        <p>
                            L'interface utilisateur a été développée en utilisant la bibliothèque <span className='text-[#ffd700]'>React</span> et
                            la mise en forme a été implémentée à l'aide de <span className='text-[#ffd700]'>TailwindCss</span>.
                          </p>
                          <p className='mt-2'>
                            L'application elle-même est hébergée sur la plateforme <span className='text-[#ffd700]'>Firebase</span>.
                          </p>
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