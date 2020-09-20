import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';
import Logo from '../../Assets/Images/Raj_Logo.png';
import LogoPR from '../../Assets/Images/android-chrome-192x192.png';
import getResumeUrl from '../../Utility/utility';
class Navigation extends Component{

    redirectToResume = () =>{
        getResumeUrl()
        .then(response =>{
            window.open(response,"_blank");
        })    
    }
    render(){
        return(
                <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Media>
                                <img src={LogoPR} alt={Logo}  width={50} height={50}/>
                            </Media>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link className="fw" href="#home">Home</Nav.Link>
                                <Nav.Link className="fw" href="#aboutMe">About Me</Nav.Link>
                                <Nav.Link className="fw" href="#resume">Resume</Nav.Link>
                                <Nav.Link className="fw" href="#contactMe">Contact Me</Nav.Link>
                                <Nav.Link className="fw" onClick={this.redirectToResume}>Download CV</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        )

    }

}
export default Navigation;