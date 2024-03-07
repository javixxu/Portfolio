import { Col, Container, Row, TabContainer, TabContent} from 'react-bootstrap';

import foolishfish from "../assets/img/projects/foolish_fish.png";
import phonkdrifter from "../assets/img/projects/phonk_drifter.png";
import monkeyDelivery from "../assets/img/projects/monkeyDelivery.png";
import proceduralWorlds from "../assets/img/projects/procedural-worlds.png";
/*import colorSharp2 from "../assets/img/color-sharp2.png";*/

export const Projects = () =>{
    const projects =[
        {
            title: "Foolish Fish",
            description: "It is a Foddian Game of vertical platforms, to reach these platforms the player must think how to move with the inertia of the movement to reach them. Winners of the Foddiam Jam [Speed Jam].",
            imgUrl:foolishfish,
        },
        {
            title: "Phonk Drifter",
            description: "An action game in which the player drives a spaceship dodging obstacles while collecting upgrades and missiles to face the fearsome 'Judge'.",
            imgUrl:phonkdrifter,
        },
        {
            title: "Monkey Delivery",
            description: "Monkey Delivery is a game in which the player controls a little monkey named Monky who delivers packages to the residents of Todesfall, a town where he has moved to work.",
            imgUrl:monkeyDelivery,
        },
        {
            title: "Procedural Worlds",
            description: "It is a tool that enables the generation of procedural generation of procedural worlds with a pixelated aesthetic in the style of Minecraft.",
            imgUrl:proceduralWorlds,
        },
        {
            title: "Melvin Cosmic Scape",
            description: "It is a puzzle game in which the player will play with Melvin, the protagonist who is a small alien. The player must solve puzzles so that he can escape from the laboratory where he has been locked up and return to his intergalactic world.",
            imgUrl:foolishfish,
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