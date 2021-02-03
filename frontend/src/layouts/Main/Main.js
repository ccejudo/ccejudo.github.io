import React from 'react'

//Styles
import './main.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

//Components
import { Slide as AnimatedSlide, Fade } from 'react-reveal';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaGraduationCap, FaLaptopCode, FaMedal } from 'react-icons/fa';

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
            <div id='about' className="section--about">
                <div className="bg--black container--section">
                    <div className='title--nice'>
                            <h1 className='color--white'><b>ABOUT ME</b></h1>
                            <span></span>
                    </div>
                    <div className='about--wrapper'>
                        <div className='about--text'>
                            <p>A third year Computational Engineering student at Tecnológico de Monterrey CSF with an interest in Full-Stack development, Cloud, and Machine Learning. Experienced with different technologies, quick learner and adaptable.<br/><br/>I believe that the skills that I have acquire from different work experiences and competitive university life make me a good leader, and I am always trying to apply and polish them in any opportunity that comes in my way. </p>
                            <div className="carousel--container">
                                <CarouselProvider
                                    naturalSlideWidth={60}
                                    naturalSlideHeight={25}
                                    totalSlides={3}
                                >
                                    <Slider>
                                        <Slide index={0}>
                                            <div>
                                                <h2><FaGraduationCap/>  Education</h2>
                                                <p>
                                                    Tecnológico de Monterrey CSF<br/>
                                                    Bachelor of Computer Engineering<br/>
                                                    August 2017 - December 2021<br/>
                                                    GPA: 3.9
                                                </p>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div>
                                                <h2><FaLaptopCode/>  Technologies</h2>
                                                <ul>
                                                    <li>ReactJS</li>
                                                    <li>NodeJS</li>
                                                    <li>Python</li>
                                                    <li>CSS</li>
                                                </ul>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div>
                                                <h2><FaMedal/>  Achivements</h2>
                                                <p>Cool</p>
                                            </div>
                                        </Slide>
                                    </Slider>
                                    <ButtonBack>Back</ButtonBack>
                                    <ButtonNext>Next</ButtonNext>
                                </CarouselProvider>
                            </div>
                        </div>
                        <div className='about--image'>
                            <img src='./images/assets/uke_photo_hex.png' alt='Cris Uke'/>
                        </div>
                    </div>
                </div>
            </div>
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
