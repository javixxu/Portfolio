import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState} from 'react';

import meter1 from "../assets/img/meter1.svg";
import colorSharp from "../assets/img/color-sharp.jpg"
import allSkills from "../assets/img/logos/ALL.png"

import agrp_click from '../assets/img/agrupar-clikeado.svg';
import agrp_no_click from '../assets/img/agrupar-clickear.svg';
import dagrp_click from '../assets/img/desagrupar-clikeado.svg';
import dagrp_no_click from '../assets/img/desagrupar-clikear.svg';

export const Skills = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const [showAllSkills, setShowAllSkills] = useState(false);
    const [showAllImgSrc, setShowAllImgSrc] = useState(dagrp_no_click);
    const [showLessImgSrc, setShowLessImgSrc] = useState(agrp_click);


    const handleShowAllClick = () => {
        setShowAllSkills(true);
        // Cambiar la ruta de la imagen para Show All
        setShowAllImgSrc(dagrp_click);
        // Restaurar la ruta de la imagen para Show Less
        setShowLessImgSrc(agrp_no_click);
    };

    const handleShowLessClick = () => {
        setShowAllSkills(false);
        // Cambiar la ruta de la imagen para Show Less
        setShowLessImgSrc(agrp_click);
        // Restaurar la ruta de la imagen para Show All
        setShowAllImgSrc(dagrp_no_click);
    };

    const creative_skills = [
        { name: 'PhotoShop', img: meter1 },
        { name: 'Blender', img: meter1 },
        { name: 'Premier', img: meter1 },
        { name: 'Audition', img: meter1 },
        { name: 'Ableton', img: meter1 },
        { name: 'React', img: meter1 },
        { name: 'CSS', img: meter1 },
    ];

    const main_skills = [
        { name: 'Unity', img: meter1 },
        { name: 'Unreal', img: meter1 },
        { name: 'C++', img: meter1 },
        { name: 'C#', img: meter1 },
        { name: 'AWS', img: meter1 },
        { name: 'JavaScript', img: meter1 },
        { name: 'Lua', img: meter1 },
        { name: 'HTML', img: meter1 },
        { name: 'Defold', img: meter1 },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx"> 
                        <div className='skills-div-container'>
                            <div className='skill-icons-div'>
                                {/* Imagen como botón para Show All */}
                                <img
                                    className='skill-icons'
                                    src={showAllImgSrc}
                                    alt="Show All"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleShowAllClick}
                                />
                                {/* Imagen como botón para Show Less */}
                                <img
                                    className='skill-icons'
                                    src={showLessImgSrc}
                                    alt="Show Less"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleShowLessClick}
                                />
                            </div>
                            <h2>Skills</h2>
                        </div>
                       
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br />
                            Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                            
                        {!showAllSkills && (
                            <div>

                                <h5>Main Skills</h5>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {main_skills.map((skill, index) => (
                                <div key={index} className="item">
                                    <img src={skill.img} alt="img" />
                                    <h5>{skill.name}</h5>
                                </div>
                                ))}
                                </Carousel>

                                <h5>Creative Skills</h5>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {creative_skills.map((skill, index) => (
                                <div key={index} className="item">
                                    <img src={skill.img} alt="img" />
                                    <h5>{skill.name}</h5>
                                </div>
                                ))}
                                </Carousel> 

                            </div>
                           
                        )}
                        {showAllSkills && (
                            <div className="skill-list">
                                <img src={allSkills} alt="img" id="skill_ALL_img"/>
                            </div>
                        )}
                    </div>
                    </Col>
                </Row>
                
            </Container>
            {/*<img className='background-image-left' src={colorSharp} alt="img" />*/}
     </section>
    )
}