import { Container, Row, Col } from "react-bootstrap"

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/cv.svg';
import navIcon3 from '../assets/img/github.svg';
import pdf from "../assets/pdfs/CV.pdf";

export const Footer = ()=>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="d-flex align-items-center justify-content-center text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/javier-comas-de-frutos/"><img src={navIcon1} alt="icon1"/></a>
                            <a href={pdf} target="_blank" rel="noreferrer" download="Javier Comas De Frutos Curriculum.pdf"><img src={navIcon2} alt="icon2"/> </a>
                            <a href="https://github.com/javixxu"><img src={navIcon3} alt="icon3"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}