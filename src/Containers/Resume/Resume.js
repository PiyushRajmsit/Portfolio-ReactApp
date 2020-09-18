import React,{Component, Fragment} from 'react';
import {Container,Row,Col,Nav} from 'react-bootstrap';
import WorkExperience from './WorkEx/Experiences';
import Education from './Education/Educations';
import Project from './Project/Projects';
import Skills from './Skills/Skill';
import Achievements from './Achievements/Achievements';
import './Resume.css';
class Resume extends Component{

    render(){
        return(
            <Fragment>
                <div className="Resume-Outer" id="resume">
                    <Container>
                        <Row>
                            <Col md={3}>
                                <Nav id="navi">
                                    <ul>
                                        <li> <a href="#workExperience"> Work Experience </a> </li>
                                        <li> <a href="#education"> Education </a></li>
                                        <li> <a href="#majorProjects"> Major Projects </a></li>
                                        <li> <a href="#skills"> Skills </a></li>
                                        <li> <a href="#achievements"> Achievements </a></li>
                                    </ul>
                                </Nav>
                            </Col>
                            <Col md={9}>
                                <WorkExperience/>
                                <Education/>
                                <Project/>
                                <Skills/>
                                <Achievements/>
                            </Col>   
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }


}
export default Resume;