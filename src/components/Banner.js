import { useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/OIG.svg";


export const Banner = () =>{
    
    const [loopNum, setLoopNum] =useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [" Video game Programmer"," Video game Developer"]
    const [text,setText] = useState("");
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        
        let ticker = setInterval(() => {
          tick();
        }, delta);

        return () => { clearInterval(ticker) };
    });
    

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        } 
    };

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Wellcome to my Portfolio</span>
                        <h1>{`Hi I'm Javier `}</h1>
                        <h2><span className="wrap">{text}</span>&nbsp;</h2>
                        <p>Hi, I'm Javier Comas, a fourth year student in the Game Development and Design degree at UCM. My main focus within the industry is in programming,
                             but I also have a strong interest and passion for Game Design and level design.
                             In addition to my programming focus, I have conducted several academic projects that demonstrate my ability to apply 
                             theories and concepts in a practical way. My experience includes creating innovative game mechanics, 
                             optimising code performance and collaborating effectively in multidisciplinary teams.</p>
                        <button onClick={() =>{window.location.href = '#connect';}}>Let's connect<ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="HeaderImg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}