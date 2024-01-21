import { Col, Container, Row} from 'react-bootstrap';
import { useState } from "react";

/*import contactImg from "../assets/img/contact-img.svg"*/

export const Contact = () =>{

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        mail: '',
        message: '',
      };
    
      const [formDetails, setFromDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
        setFromDetails({
          ...formDetails,
          [category]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending..');
        try {
          const response = await fetch('http://localhost:5000', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDetails),
          });
    
          const result = await response.json();
          setButtonText('Send');
          setFromDetails(formInitialDetails);
    
          if (result.code === 200) {
            setStatus({ success: true, message: 'Message was sent successfully' });
          } else {
            setStatus({ success: false, message: 'Something went wrong' });
          }
        } catch (error) {
          console.error('Error sending message:', error);
          setStatus({ success: false, message: 'Something went wrong' });
        }
      };


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        { //<img src={contactImg} alt="Contact Us" />
                        }
                    </Col>
                    <Col md={6}>
                        <h2> Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" 
                                    value={formDetails.firstName} 
                                    placeholder='First Name' 
                                    onChange={(e) => onFormUpdate('firstName',e.target.value)}/>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" 
                                        value={formDetails.lastName} 
                                        placeholder='Last Name' 
                                        onChange={(e) => onFormUpdate('lastName',e.target.value)}/>
                                </Col>
                                <Col className='px-1'>
                                    <input type="mail" 
                                        value={formDetails.mail} 
                                        placeholder='Email Address' 
                                        onChange={(e) => onFormUpdate('mail',e.target.value)}/>
                                </Col>  
                            </Row>
                            <Row>
                                <textarea row="8" 
                                    value={formDetails.message} 
                                    placeholder='Message' 
                                    onChange={(e) => onFormUpdate('message',e.target.value)}
                                />
                                <button type="submit"><span>{buttonText}</span></button>
                                <Col>{
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}