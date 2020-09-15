import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';
import Logo from '../../Assets/Images/Raj_Logo.png'
class Navigation extends Component{

    render(){
        return(
                <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="#home">
                            <Media>
                                <img src={Logo} width={70} height={70}/>
                            </Media>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                                <Nav.Link href="#resume">Resume</Nav.Link>
                                <Nav.Link href="#contactMe">Contact Me</Nav.Link>
                                <Nav.Link href="#downloadCV">Download CV</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        )

    }

}
export default Navigation;