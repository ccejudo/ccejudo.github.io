import React from 'react'

import './main.css'

import { Slide, Fade } from 'react-reveal';

function Main() {
    return (
        <div>
            <div className="section--welcome">
                <div className="bg--light">
                    <Slide up>
                        <div className="container--welcome">
                            <h1>Hi there! I'm <b>Cristopher Cejudo</b>,<br/>I'm a software developer.</h1>
                        </div>
                    </Slide>
                    <Fade>
                        <div className="welcome--img">
                            <img src='./images/assets/bitmoji.png' alt='Bitmoji'/>
                        </div>
                    </Fade>
                </div>
            </div>
            <div id='about' className="section--about">
                <div className="bg--black container--section">
                    <div className='title--nice'>
                            <h1 className='color--white'><b>ABOUT ME</b></h1>
                            <span></span>
                    </div>
                    <div className='about--wrapper'>
                        <div className='about--text'>
                            <p>A third year Computational Engineering student at Tecnológico de Monterrey CSF with an interest in Full-Stack development, Cloud, and Machine Learning. Experienced with different technologies, quick learner and adaptable.<br/><br/>I believe that the skills that I have acquire from different work experiences and competitive university life make me a good leader, and I am always trying to apply and polish them in any opportunity that comes in my way. </p>
                        </div>
                        <div className='about--image'>
                            <img src='./images/assets/uke_photo_hex.png' alt='Cris Uke'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section--portfolio">

            </div>
            <div className="section--experience">

            </div>
            <div className="section--contact">

            </div>
        </div>
    )
}

export default Main
