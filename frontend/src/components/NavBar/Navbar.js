import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Button } from '../Button/Button'

import './navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link smooth to='/#inicio' className="navbar-logo" onClick={closeMobileMenu}>
                            <img src='images/logo/logo_nav.png' alt='Logo'/>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link smooth to='/#about' className='nav-links' onClick={closeMobileMenu}>
                                    ABOUT ME
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link smooth to='/#portfolio' className='nav-links' onClick={closeMobileMenu}>
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link smooth to='/#experience' className='nav-links' onClick={closeMobileMenu}>
                                    EXPERIENCE
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                <Link smooth to='/#contact' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>CONTACT ME</Button>
                                </Link>
                                ): (
                                <Link smooth to='/#contact' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'
                                    buttonSize='btn--mobile'>CONTACT ME</Button>
                                </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav> 
            </IconContext.Provider>
        </>
    )
}

export default Navbar
