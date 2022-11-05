import { useEffect, useState } from 'react'
import { useRef, lazy } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { useStateIfMounted } from 'use-state-if-mounted'
import { AiOutlineLoading } from 'react-icons/ai'
import swal from 'sweetalert';

const AnimatedLoading = lazy(() => import('../AnimatedLoading/index.jsx'));
const AnimatedLetters = lazy(() => import('../AnimatedLetters/index.jsx'));

const Contact = () => {

    const [letterClass, setLetterClass] = useStateIfMounted('text-animate')

    const [loading, setLoading] = useState(true);

    const [isSending, setIsSending] = useStateIfMounted(false);

    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 750)

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3750)
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
                        swal("Email envoyé avec succès!", "", "success");
                        e.target.reset();
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
            {loading ? <AnimatedLoading /> :
                <div className="lg:w-[90vw] w-[85vw] ml-[10%] flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-16 gap-10 items-center h-full md:h-[100vh]">
                    <div className="w-full">
                        <div className='flex lg:justify-start justify-center'>
                            <h1 className='lg:text-7xl md:text-6xl text-5xl md:p-0 p-2 lg:my-5 mt-16 mb-5 text-[#ffd700]'>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'e ', 'z', ' ', ' ', 'm', 'o', 'i']}
                                    idx={15}
                                />
                            </h1>
                        </div>
                        <div className='lg:my-20 '>
                            <form ref={form} onSubmit={sendEmail}>
                                <ul className='grid gap-x-6 grid-cols-4'>
                                    <li className="md:col-span-2 col-span-4">
                                        <input className='w-full bg-[hsl(201,74%,26%)] py-6 outline-none px-2 my-4 active:scale-[0.98] duration-500 text-gray-100 lg:text-3xl text-2xl' placeholder="Nom" type="text" name="name" required />
                                    </li>
                                    <li className="md:col-span-2 col-span-4">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            className='w-full bg-[hsl(201,74%,26%)] py-6 px-2 outline-none my-4 active:scale-[0.98] duration-500 text-gray-100 lg:text-3xl text-2xl'
                                            required
                                        />
                                    </li>
                                    <li className='col-span-4'>
                                        <input
                                            placeholder="Sujet"
                                            type="text"
                                            name="subject"
                                            className='w-full bg-[hsl(201,74%,26%)] py-6 my-4 px-2 outline-none active:scale-[0.98] duration-500 text-gray-100 lg:text-3xl text-2xl'
                                            required
                                        />
                                    </li>
                                    <li className='col-span-4'>
                                        <textarea
                                            placeholder="Message"
                                            name="message"
                                            required
                                            className='w-full bg-[hsl(201,74%,26%)] h-[200px] py-6 px-2 outline-none active:scale-[0.98] duration-500 my-4 text-gray-100 lg:text-3xl text-2xl'
                                        ></textarea>
                                    </li>
                                    <li className='col-end-5 col-span-2 flex justify-end'>
                                        {isSending ?
                                            <AiOutlineLoading className='loading-spinner' size={40}/>
                                            : <input type="submit" className="flat-button lg:text-4xl text-3xl py-4 px-10" value="Envoyer" />
                                        }

                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className='lg:min-w-[50vw] lg:h-[100vh] h-[40vh] min-w-[85vw] md:mb-0 mb-4 relative' data-aos="fade-in" data-aos-easing="ease-in-out" data-aos-delay="200" data-aos-once="true">
                            <div className="absolute top-0 right-0 left-0 bottom-0 pointer-events-none bg-blue-100 opacity-20 "></div>
                            <iframe className='bg-dark' width="100%" height="100%" frameBorder="0" scrolling="yes" marginHeight="0" marginWidth="0" title='map'
                                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=fr&amp;q=108%20rue%20larevelli%C3%A8re&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Contact;
