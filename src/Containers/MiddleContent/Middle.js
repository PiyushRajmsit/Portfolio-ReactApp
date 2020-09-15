import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Media,Image,Button} from 'react-bootstrap';
import Profile from '../../Assets/Images/Profile-2.jpg';
import './Middle.css';
class Middle extends Component{
    render(){

        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col md={6} className="p-0 d-none d-lg-block">
                            <Media>
                                <Image src={Profile} fluid rounded></Image>
                            </Media>
                        </Col>
                        <Col md={6} className="intro-Info">
                            <h1 className="aboutMe">
                                About Me
                            </h1>
                            <div>
                                <h5 className="intro-sec">
                                    With A Bachelor's Degree in Computer Science, A Software Engineer with Experience in Building Large-Scalable Products using Latest Technologies.
                                    Currently Working as a Software Engineer in MakemyTrip (Gurugram) in Flights-Teams. 
                                </h5>
                            </div>
                            <div classname="info-section">
                                <ul class="about-info mt-4">
                                    <li><div className="field"> Name : </div>  <span className="answer"> Piyush Raj</span></li>
                                    <li><span className="field"> Date of Birth : </span> <span className="answer"> 1st March,1997</span></li>
                                    <li><span className="field"> Address : </span> <span className="answer">Gurugram,India</span></li>
                                    <li><span className="field"> Email : </span> <span className="answer">piyraj007@gmail.com</span></li>
                                </ul>
                                <div className="about-info">
                                    <Button size="lg"> Download CV </Button>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        )

    }


}
export default Middle;