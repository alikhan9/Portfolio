import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters/index';
import { useStateIfMounted } from 'use-state-if-mounted'
import { AiOutlineCloseSquare, AiOutlineLoading } from 'react-icons/ai'

export const Contact = () => {
    const [letterClass, setLetterClass] = useStateIfMounted('text-animate')
    const [hideInfoZone, setHideInfoZone] = useState(false);
    const [isSending, setIsSending] = useStateIfMounted(false);
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            emailjs
            .sendForm(
                'service_ylednn',
                'template_he7eax6',
                form.current,
                'nmOF8TAZ1xgAeHQdV'
            )
            .then(
                () => {
                    setIsSending(false);
                    alert('Email envoyé!');
                },
                () => {
                    setIsSending(false);
                    alert('Échec de l\'envoi viellez réessayer');
                }
            )
        }, 10)
        
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'e ', 'z', ' ', 'm', 'o', 'i']}
                            idx={15}
                        />
                    </h1>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Nom" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Sujet"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    {isSending ?
                                        <AiOutlineLoading className='loading-spinner' />
                                        : <input type="submit" className="flat-button" value="Envoyer" />
                                    }

                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className={hideInfoZone ? null : "info-map"} style={hideInfoZone ? { opacity: 0 } : null}>
                    <AiOutlineCloseSquare
                        onClick={() => setHideInfoZone(!hideInfoZone)}
                        className='close' />
                    France <br />
                    108 rue larevellière <br />
                    49100 Angers <br />
                </div>
                <div className="map-wrap">
                    <MapContainer center={[47.4710662, -0.5367964]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[47.4710662, -0.5367964]}>
                            <Popup>Alikhan habite ici, venez boire un café :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
