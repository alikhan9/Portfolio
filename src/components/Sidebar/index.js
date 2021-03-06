import './index.scss'

import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineSetting } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <nav>
            <NavLink 
            exact='true' 
            activeclassname='active' 
            to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink 
            exact='true' 
            activeclassname='active' 
            className="skills-link" 
            to='/skills'>
                <GiSkills style={{ color: '#4d4d4e' }} className='icons' />
            </NavLink>
            <NavLink 
            exact='true' 
            activeclassname='active' 
            className="projects-link" 
            to='/projects'>
                <AiOutlineSetting style={{ color: '#4d4d4e' }} className='icons'/>
            </NavLink>
            <NavLink 
            exact='true' 
            activeclassname='active' 
            className="contact-link" 
            to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/alikhan9">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/alikhan9">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;
