import React, { useEffect, Suspense, lazy, useState } from 'react'; import { Link } from 'react-router-dom'
import './index.scss'
import { Canvas, useThree } from "@react-three/fiber";
import Loader from 'react-loaders';
import { useStateIfMounted } from 'use-state-if-mounted';
import { OrbitControls } from '@react-three/drei'
import useWindowDimensions from './windowDimension';
import { useControls } from 'leva';
import AnimatedLetters from '../AnimatedLetters/index.jsx';
const AnimatedLoading = lazy(() => import('../AnimatedLoading/index.jsx'));
const Roam = lazy(() => import('./Roam'));

const Lights = ({ ratio }) => {
    // const { intensity, width, height, color } = useControls({ intensity: { value: 12, min: 0, max: 20 }, width: { value: 4.71, min: 1, max: 10 }, height: { value: 10, min: 1, max: 10 }, color: '#9114de' });

    useThree(({ camera }) => {
        camera.rotation.set(0.1, -0.2 * ratio * 0.51, -0.1 * ratio * 0.51);
    });

    return (
        <>
            <pointLight args={['#9114de', 20 * ratio * 0.51, 4.71 * ratio * 0.51, 10 * ratio * 0.51]} position={[-1.8 * ratio * 0.51, 1.9 * ratio * 0.51, 0.5 * ratio * 0.51]} />
            <pointLight args={['#9114de', 20 * ratio * 0.51, 4 * ratio * 0.51, 10 * ratio * 0.51]} position={[0.7 * ratio * 0.51, 2.8 * ratio * 0.51, -0.5 * ratio * 0.51]} />
            <pointLight args={['#9114de', 20 * ratio * 0.51, 4.8 * ratio * 0.51, 10 * ratio * 0.51]} position={[.5 * ratio * 0.51, 1.5 * ratio * 0.51, 0.4 * ratio * 0.51]} />
            <pointLight args={["#1497de", 20 * ratio * 0.51, 7.36 * ratio * 0.51, 10 * ratio * 0.51]} position={[2 * ratio * 0.51, 1.7 * ratio * 0.51, 1.6 * ratio * 0.51]} />
            <pointLight args={["#c4c4c4", 4 * ratio * 0.51, 5 * ratio * 0.51, 10 * ratio * 0.51]} decay={6} position={[-.8 * ratio * 0.51, 1 * ratio * 0.51, .4 * ratio * 0.51]} />
        </>
    )
};



const Home = () => {

    const [letterClass, setLetterClass] = useStateIfMounted('text-animate');

    const hello = ['B', 'o', 'n', 'j', 'o', 'u', 'r', ','];

    const iAm = ['J', 'e', ' ', 's', 'u', 'i', 's', ' ']

    const nameArray = ['A', 'l', 'i', 'k', 'h', 'a', 'n', ','];

    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'w', 'e', 'b',]

    const { height, width } = useWindowDimensions();

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },750)
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4500);
    }, [])

    const ratioRoom = () => {
        if (width > 1285) return 25 * (width / height);
        if (width > 1085) return 22 * (width / height);
        if (width > 1023) return 20 * (width / height);
        if (width > 600) return 50 * (width / height);
        if (width > 300) return 60 * (width / height);
        return 20 * (width / height);

    }

    return (
        <div>
            {loading ? <AnimatedLoading/> :
                <div className='home-page flex flex-col items-center h-full  lg:justify-start lg:items-center lg:flex-row '>
                    <div className={'max-h-[100%] md:max-w-[400px] lg:translate-y-0 md:translate-y-[20%] mt-20 lg:block items-center justify-center flex flex-col md:translate-x-[-10%] w-full z-[10] lg:ml-40 xl:ml-28 '}>
                        <h1 className='relative text-[#fff] xl:text-[5.5rem] md:text-7xl lg:text-7xl lg:min-w-full text-6xl'>
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
                        <h2 className='md:text-2xl py-4 text-xl'>Développeur Spring Boot / React</h2>
                        <Link className='flat-button translate-y-[-10px] text-2xl md:text-3xl min-w-[250px] text-center md:min-w-[200px]' to='/contact'>CONTACTEZ MOI</Link>
                    </div>
                    <Canvas className="w-full xl:mr-[-8%] fade-in lg:m-0 md:mt-20 md:translate-x-0 md:translate-y-0 translate-x-[-6%] z-[-20] xl:ml-0"
                        shadows>
                        <Lights ratio={width / height} />
                        <Suspense fallback={null}>
                            <Roam scale={ratioRoom} ratio={width / height} />
                        </Suspense>
                    </Canvas>
                    <p className='copyright-tag'>This work is based on <a href="https://sketchfab.com/3d-models/room-c006e44a66a94d099297133a466d42f6" target="_blank" rel="noreferrer">room</a> by <a rel="noreferrer" target="_blank" href="https://sketchfab.com/sunnyvenkatesh92">Venkatesh</a> licensed under <a href='http://creativecommons.org/licenses/by/4.0/' rel="noreferrer" target="_blank">CC-BY-4.0</a></p>
                </div>
            }
        </div>
    )
}

export default Home;