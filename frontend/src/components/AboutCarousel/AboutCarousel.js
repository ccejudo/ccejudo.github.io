import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaGraduationCap, FaLaptopCode, FaMedal } from 'react-icons/fa';

import { Grid } from '@material-ui/core';

function AboutCarousel() {
    return (
        <CarouselProvider
            naturalSlideWidth={60}
            naturalSlideHeight={25}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}>
                    <div className="card--container">
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
                    <div className="card--container">
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
                    <div className="card--container">
                        <h2><FaMedal/>  Achivements</h2>
                        <p>Three Recognitions for Academic Excellence</p>
                    </div>
                </Slide>
            </Slider>
            <Grid container justify="space-around">
                <ButtonBack className='carousel--button'>Back</ButtonBack>
                <ButtonNext className='carousel--button'>Next</ButtonNext>
            </Grid>
        </CarouselProvider>
    )
}

export default AboutCarousel
