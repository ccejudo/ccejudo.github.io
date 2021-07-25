import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaMedal } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

function AboutCarousel() {
    return (
        <Carousel showStatus={false} showThumbs={false}>
            <div className="card--container">
                <h2><FaGraduationCap/>  Education</h2>
                <p>
                    Tecnológico de Monterrey CSF<br/>
                    Bachelor of Computer Engineering<br/>
                    August 2017 - December 2021<br/>
                    GPA: 3.9
                </p>
            </div>
            <div className="card--container">
                <h2><FaLaptopCode/>  Technologies</h2>
                <ul>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>Python</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="card--container">
                <h2><FaMedal/>  Achivements</h2>
                <p>Three Recognitions for Academic Excellence</p>
            </div>
        </Carousel>
    )
}

export default AboutCarousel
