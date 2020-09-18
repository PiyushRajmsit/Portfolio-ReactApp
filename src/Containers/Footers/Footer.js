import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import './Footer.css';
const footer = () =>{
    return(
        <footer className="ftco-footer">
            <Container>
                <Row>
                    <Col md={5}>
                        <h2>About</h2>
                        <div className="Icons"><a href="mailto:piyraj007@gmail.com"><MailIcon style={{ fontSize: 45,color: "white"}}/></a></div>
                        <div className="Icons"><a href="https://www.linkedin.com/in/piyush-raj-05b371137/"><LinkedInIcon  style={{ fontSize: 45,color: "white"}}/></a></div>
                        <div className="Icons"><a href="https://github.com/PiyushRajmsit"><GitHubIcon  style={{ fontSize: 45,color: "white"}}/></a></div>
                        <div className="Icons"><a href="https://www.codechef.com/users/pieraj90"><CodeIcon  style={{ fontSize: 45,color: "white"}}/></a></div>
                    </Col>
                    <Col md={2}>
                        
                    </Col>
                    <Col md={5}>
                        <h2>Have any Questions?</h2>
                        <div className="Icons">
                            <span style={{display : "flex"}}><MailIcon style={{ fontSize: 45,color: "white",marginRight : "15px"}}></MailIcon><h3><a href="mailto:piyraj007@gmail.com"> piyraj007@gmail.com </a></h3></span>
                            
                        </div>

                    </Col>
                </Row>

            </Container>
        </footer>
        

    );

}
export default footer;