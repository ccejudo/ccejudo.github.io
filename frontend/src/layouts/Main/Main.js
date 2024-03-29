import React from 'react'

//Styles
import './main.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

//Components
import { Slide as AnimatedSlide, Fade } from 'react-reveal';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import AboutCarousel from '../../components/AboutCarousel/AboutCarousel';

function Main() {
    return (
        <Grid container>
            <span id="inicio" className="link-welcome"/>
            <Grid container item xs={12} className="section--welcome">
                <div className="bg--light">
                    <AnimatedSlide up>
                        <div className="container--welcome">
                            <h1>Hi there! I'm <b>Cristopher Cejudo</b>.<br/>I'm a software developer.</h1>
                        </div>
                        <Grid container justify='space-around' style={{ width:'70%', margin: 'auto'}}>
                            <button className='button--social' onClick={ () => window.open('https://github.com/ccejudo') }>
                                <GitHubIcon style={{ fontSize: '3rem', color:'rgb(255, 230, 41)' }}/>
                            </button>
                            <button className='button--social' onClick={ () => window.open('https://www.linkedin.com/in/cristopher-cejudo/') }>
                                <LinkedInIcon style={{ fontSize: '3rem', color:'rgb(255, 230, 41)' }}/>
                            </button>
                            <button className='button--social' onClick={ () => window.open("mailto:cristopher.cm1999@gmail.com") }>
                                <MailIcon style={{ fontSize: '3rem', color:'rgb(255, 230, 41)' }}/>
                            </button>
                        </Grid>
                    </AnimatedSlide>
                    <Fade>
                        <div className="welcome--img">
                            <img src='./images/assets/bitmoji.png' alt='Bitmoji'/>
                        </div>
                    </Fade>
                </div>
                <span id="about" className="link-top"/>
            </Grid>
            <Grid container item xs={12} className="bg--black container--section">
                <Grid item xs={12} className='title--nice'>
                    <AnimatedSlide left>
                        <h1 className='color--white'><b>ABOUT ME</b></h1>
                        <span></span>
                    </AnimatedSlide>
                </Grid>
                <Grid container item xs={12} className='about--wrapper'>
                    <Grid item xs={12} md={6} className='about--text'>
                        <AnimatedSlide right>
                            <p>
                                Hello! I'm Cristopher and I'm passionate about using software to create and devolop new ideas.
                                My interests are Full-Stack Development, Machine Learning and Site Reliability. 
                                Lately I've been working with the following languages and technologies:
                                <br/>
                                Also, I like to play the ukulele and go for a hike sometimes. 🏔
                            </p>
                        </AnimatedSlide>
                    </Grid>
                    <Grid item xs={12} md={6} className='about--image'>
                        <AnimatedSlide right>
                            <img src='./images/assets/profile_shadow.png' alt='Cris Uke'/>
                        </AnimatedSlide>
                    </Grid>
                </Grid>
                <span id="portfolio" className="link-top"/>
            </Grid>
            <Grid container item xs={12} className="section--portfolio">
                <Grid className='bg--white container--section'>
                    <Grid item xs={12} className='title--nice'>
                        <AnimatedSlide left>
                            <h1 className='color--black'><b>PORTFOLIO</b></h1>
                            <span></span>
                        </AnimatedSlide>
                    </Grid>
                </Grid>
                <span id="experience" className="link-top"/>
            </Grid>
            <Grid container item xs={12} className="section--portfolio">
                <Grid className='bg--black container--section'>
                    <Grid item xs={12} className='title--nice'>
                        <AnimatedSlide left>
                            <h1 className='color--white'><b>EXPERIENCE</b></h1>
                            <span></span>
                        </AnimatedSlide>
                    </Grid>
                </Grid>
                <span id="experience" className="link-top"/>
            </Grid>
            <Grid container item xs={12} className="section--portfolio">
                <Grid className='bg--white container--section'>
                    <Grid item xs={12} className='title--nice'>
                        <AnimatedSlide left>
                            <h1 className='color--black'><b>CONTACT ME</b></h1>
                            <span></span>
                        </AnimatedSlide>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Main
