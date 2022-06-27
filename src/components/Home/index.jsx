import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters/index';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from 'react-loaders';
import { useStateIfMounted } from 'use-state-if-mounted';
import Roam from './Roam'

export const Home = () => {
    const [letterClass, setLetterClass] = useStateIfMounted('text-animate');
    const hello = ['B', 'o', 'n', 'j', 'o', 'u', 'r', ','];
    const iAm = ['J', 'e', ' ', 's', 'u', 'i', 's', ' ']
    const nameArray = ['A', 'l', 'i', 'k', 'h', 'a', 'n', ','];
    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'w', 'e', 'b',]

    const [isReady, setIsReady] = useStateIfMounted(false);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
            setIsReady(true);
        }, 5000);
        setTimeout(() => {
            setIsReady(true);
        }, 4000);
    }, [])

    return (
        <div>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={hello}
                            idx={12} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={iAm}
                            idx={12} />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Développeur Backend / Java / SpringBoot</h2>
                    <Link className='flat-button' to='/contact'>CONTACTEZ MOI</Link>
                </div>
                 {isReady ? 
                 <Canvas className="canvas">
                 <OrbitControls enableZoom={true} />
                 <ambientLight intensity={.7} />
                 <directionalLight position={[-2, 5, 5]} />
                 <Suspense fallback={null} dispose={null}>
                   <Roam />
                 </Suspense>
               </Canvas>
                 : null}
                 <p className='copyright-tag'>Room by <a href="https://sketchfab.com/sunnyvenkatesh92" target="_blank">Venkatesh</a> is licensed under <a href='https://creativecommons.org/licenses/by/4.0/' target="_blank">Creative Commons Attribution</a></p>
            </div>
            <Loader type='pacman' />
        </div>
    )
}
