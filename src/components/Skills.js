import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState} from 'react';


// Logos
import audition from "../assets/img/logos/Adobe-Audition.png";
import photoshop from "../assets/img/logos/Adobe-Photoshop.png";
import premiere from "../assets/img/logos/Adobe-Premier.png";
import aws from "../assets/img/logos/aws.png";
import ableton from "../assets/img/logos/logo-Ableton.png";
import blender from "../assets/img/logos/logo-blender.png";
import c1 from "../assets/img/logos/logo-c++.png";
import c2 from "../assets/img/logos/logo-c-sharp.png";
import defold from "../assets/img/logos/logo-defold1.png";
import html from "../assets/img/logos/logo-HTML.png";
import javascript from "../assets/img/logos/logo-javascript.png";
import lua from "../assets/img/logos/logo-Lua.png";
import react from "../assets/img/logos/logo-React.png";
import unreal from "../assets/img/logos/logo-unreal.png";
import unity from "../assets/img/logos/unity.png";
//Logos
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
        { name: 'PhotoShop', img: photoshop },
        { name: 'Blender', img: blender },
        { name: 'Premier', img: premiere },
        { name: 'Audition', img: audition },
        { name: 'Ableton', img: ableton },
        
    ];

    const main_skills = [
        { name: 'Unity', img: unity },
        { name: 'C++', img: c1 },
        { name: 'Unreal', img: unreal },
        { name: 'C#', img: c2 },
        { name: 'AWS', img: aws },
        { name: 'JavaScript', img: javascript },
        { name: 'Lua', img: lua },
        { name: 'HTML', img: html },
        { name: 'CSS', img: html },
        { name: 'React', img: react },
        { name: 'Defold', img: defold }, 
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
                            Below, I delve into the kaleidoscope of skills that make up my professional palette, 
                        <br />
                        I divide my skills into two distinct categories: technical and a bit more creative.
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

                                <h5><br></br>Creative Skills</h5>
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