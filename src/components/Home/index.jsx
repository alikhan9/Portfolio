import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters/index';
import { Logo } from './Logo';
import Loader from 'react-loaders';

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const hello = ['B', 'o', 'n', 'j', 'o', 'u', 'r', ','];
    const iAm = ['J', 'e', ' ', 's', 'u', 'i', 's', ' ']
    const nameArray = ['A', 'l', 'i', 'k', 'h', 'a', 'n', ','];
    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'w', 'e', 'b',]

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
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
                 {isReady ? <Logo />: null}
            </div>
            <Loader type='pacman' />
        </div>
    )
}
