import { useState } from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';
import React, { useEffect} from 'react';

import my_logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/cv.svg';
import navIcon3 from '../assets/img/github.svg';
import pdf from "../assets/pdfs/CV.pdf";

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    

    useEffect(() =>{
        const onScroll = () =>{
            if (window.scrollY > 50) 
                seScrolled(true);             
            else
                seScrolled(false);
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (link) =>{
        setActiveLink(link)
    }   

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={my_logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() =>{
                            onUpdateActiveLink('home'); 
                            window.history.replaceState(null, '', '#home');}}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() =>{
                            onUpdateActiveLink('skills');
                            window.history.replaceState(null, '', '#skills');}}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() =>{
                            onUpdateActiveLink('projects'); 
                            window.history.replaceState(null, '', '#projects');}}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/javier-comas-de-frutos/"><img src={navIcon1} alt="icon1"/></a>
                            <a href={pdf} target="_blank" rel="noreferrer"><img src={navIcon2} alt="icon2"/> </a>
                            <a href="https://github.com/javixxu"><img src={navIcon3} alt="icon3"/></a>
                        </div>
                        <button className='vvd' onClick={() =>{window.location.href = '#connect';}} >
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 