import React, { useEffect, Suspense, lazy, useTransition } from 'react'; import { Link } from 'react-router-dom'
import './index.scss'
import { Canvas } from "@react-three/fiber";
import Loader from 'react-loaders';
import { useStateIfMounted } from 'use-state-if-mounted';
import { OrbitControls } from '@react-three/drei'

// import { AnimatedLetters } from '../AnimatedLetters/index';
const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));
const Roam = lazy(() => import('./Roam'));



const Home = () => {
    const [letterClass, setLetterClass] = useStateIfMounted('text-animate');
    const [isPending, startTransition] = useTransition()
    const hello = ['B', 'o', 'n', 'j', 'o', 'u', 'r', ','];
    const iAm = ['J', 'e', ' ', 's', 'u', 'i', 's', ' ']
    const nameArray = ['A', 'l', 'i', 'k', 'h', 'a', 'n', ','];
    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'w', 'e', 'b',]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
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
                <Canvas className="canvas"
                    shadows
                    dpr={[1, 2]}
                    onCreated={({ gl }) => ((gl.shadowMap.autoUpdate = false), (gl.shadowMap.needsUpdate = true))}>
                    <OrbitControls enableZoom={true} />
                    <pointLight position={[0, 0, 0]} intensity={0.5} />
                    <spotLight intensity={2.5} position={[20, 20, 20]} castShadow />
                    <Suspense fallback={null} dispose={null}>
                        <Roam />
                    </Suspense>
                </Canvas>
                <p className='copyright-tag'>Room by <a href="https://sketchfab.com/sunnyvenkatesh92" target="_blank">Venkatesh</a> is licensed under <a href='https://creativecommons.org/licenses/by/4.0/' target="_blank">Creative Commons Attribution</a></p>
            </div>
            <Loader type='pacman' />
        </div>
    )
}

export default Home;