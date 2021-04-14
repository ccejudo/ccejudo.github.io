import React from 'react'

//Styles
import './main.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

//Components
import { Slide as AnimatedSlide, Fade } from 'react-reveal';
import { Grid } from '@material-ui/core';

import AboutCarousel from '../../components/AboutCarousel/AboutCarousel';

function Main() {
    return (
        <div>
            <div className="section--welcome">
                <div className="bg--light">
                    <AnimatedSlide up>
                        <div className="container--welcome">
                            <h1>Hi there! I'm <b>Cristopher Cejudo</b>,<br/>I'm a software developer.</h1>
                        </div>
                    </AnimatedSlide>
                    <Fade>
                        <div className="welcome--img">
                            <img src='./images/assets/bitmoji.png' alt='Bitmoji'/>
                        </div>
                    </Fade>
                </div>
            </div>
            <Grid container id='about'>
                <Grid container item xs={12} className="bg--black container--section">
                    <Grid item xs={12} className='title--nice'>
                            <h1 className='color--white'><b>ABOUT ME</b></h1>
                            <span></span>
                    </Grid>
                    <Grid container item xs={12} className='about--wrapper'>
                        <Grid item xs={12} md={6} className='about--text'>
                            <p>A third year Computational Engineering student at Tecnológico de Monterrey CSF with an interest in Full-Stack development, Cloud, and Machine Learning. Experienced with different technologies, quick learner and adaptable.<br/><br/>I believe that the skills that I have acquire from different work experiences and competitive university life make me a good leader, and I am always trying to apply and polish them in any opportunity that comes in my way. </p>
                            <div className="carousel--container">
                                <AboutCarousel/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className='about--image'>
                            <img src='./images/assets/uke_photo_hex.png' alt='Cris Uke'/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div id='portfolio' className="section--portfolio">
                <div className='bg--white container--section'>
                    <div className='title--nice'>
                            <h1 className='color--black'><b>PORTFOLIO</b></h1>
                            <span></span>
                    </div>
                </div>
            </div>
            <div className="section--experience">

            </div>
            <div className="section--contact">

            </div>
        </div>
    )
}

export default Main
