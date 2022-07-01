import React, { useEffect, Suspense, lazy, useState } from 'react'; import { Link } from 'react-router-dom'
import './index.scss'
import { Canvas, useThree } from "@react-three/fiber";
import Loader from 'react-loaders';
import { useStateIfMounted } from 'use-state-if-mounted';
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three";

const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));
const Roam = lazy(() => import('./Roam'));

const Lights = () => {
    const { scene } = useThree();
    const light = new THREE.PointLight("#d0a8d0", 1, 1);
    light.position.set(-4.35 * 0.4, 4.65 * 0.4, 1.3 * 0.4);
    light.intensity = .5;
    light.decay = 2;
    light.power = 4;
    light.distance = 2;
    scene.add(light);

    const light2 = new THREE.PointLight("#d0a8d0", 1, 1);
    light2.position.set(1 * 0.4, 6 * 0.4, -2 * 0.4);
    light2.intensity = .5;
    light2.decay = 2;
    light2.power = 8;
    light2.distance = 2;
    scene.add(light2);

    const light3 = new THREE.PointLight("#99e3e2", 1, 1);
    light3.position.set(4.3 * 0.4, 4.4 * 0.4, 4 * 0.4);
    light3.intensity = .5;
    light3.decay = 2;
    light3.power = 8;
    light3.distance = 3.5;
    scene.add(light3);

    const light4 = new THREE.DirectionalLight("#ece3ec", 0);
    light4.position.set(2.3 * 0.4, 3 * 0.4, 1 * 0.4);
    light4.intensity = 0.2;
    light4.decay = 2;
    light4.power = 6;
    scene.add(light4);
};



const Home = () => {
    const [letterClass, setLetterClass] = useStateIfMounted('text-animate');
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
                    shadows>
                    <OrbitControls enableZoom={true} />
                    <Lights />
                    <Suspense fallback={null}>
                        <Roam />
                    </Suspense>
                </Canvas>
                <p className='copyright-tag'>This work is based on <a href="https://sketchfab.com/3d-models/room-c006e44a66a94d099297133a466d42f6" target="_blank" rel="noreferrer">room</a> by <a rel="noreferrer" target="_blank" href="https://sketchfab.com/sunnyvenkatesh92">Venkatesh</a> licensed under <a href='http://creativecommons.org/licenses/by/4.0/' rel="noreferrer" target="_blank">CC-BY-4.0</a></p>
            </div>
            <Loader type='pacman' />
        </div>
    )
}

export default Home;