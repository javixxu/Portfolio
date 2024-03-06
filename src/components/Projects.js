import { Col, Container, Row, TabContainer, TabContent} from 'react-bootstrap';

import foolishfish from "../assets/img/projects/foolish_fish.png";
import phonkdrifter from "../assets/img/projects/phonk_drifter.png";
import monkeyDelivery from "../assets/img/projects/monkeyDelivery.png";
/*import colorSharp2 from "../assets/img/color-sharp2.png";*/

export const Projects = () =>{
    const projects =[
        {
            title: "Foolish Fish",
            description: "hola k tal",
            imgUrl:foolishfish,
        },
        {
            title: "Phonk Drifter",
            description: "hola k tal",
            imgUrl:phonkdrifter,
        },
        {
            title: "Monkey Delivery",
            description: "hola k tal",
            imgUrl:monkeyDelivery,
        },
    ]

    return( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are a few projects I have done</p>
                        <TabContainer id="projects-tabs">
                            <TabContent>
                                <Row>{
                                    projects.map((proj,index) =>{
                                        return(
                                            <Col sm={6} md={4} key={index}>
                                                <div className='proj-imgbx'>
                                                    <img src={proj.imgUrl} alt="project_image"/>
                                                    <div className='proj-txtx'>
                                                        <h4>{proj.title}</h4>
                                                        <span>{proj.description}</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                                </Row>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container> 
            {//<img className='background-image-right' src={colorSharp2} alt="background-projects"></img>
            }
        </section>
    )
}