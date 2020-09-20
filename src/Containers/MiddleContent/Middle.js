import React,{Component,Fragment} from 'react';
import {Container,Row,Col,Media,Image,Button} from 'react-bootstrap';
import Profile from '../../Assets/Images/Profile-2.jpg';
import axios from '../../axios';
import LineShimmer from '../../UI/Shimmer/Shimmer';
import './Middle.css';
class Middle extends Component{

    state = null;

    componentDidMount(){
        axios.get('/aboutMe.json')
        .then( res =>{
            // console.log(res);
            const response = res.data;
            const aboutMe = response.about;
            const address = response.address;
            const email = response.email;
            this.setState({about: aboutMe,address:address,email: email});
        }).catch(error =>{
            console.log(error);
        });
    }
    render(){
        return(
            <Fragment>
                <Container id="aboutMe">
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
                                    {this.state === null ? <LineShimmer styles={{width: "80%",height: "6em"}}/> : this.state.about} 
                                </h5>
                            </div>
                            <div className="info-section">
                                <ul className="about-info mt-4">
                                    <li><div className="field"> Name : </div>  <span className="answer"> Piyush Raj</span></li>
                                    <li><span className="field"> Date of Birth : </span> <span className="answer"> 1st March,1997</span></li>
                                    <li><span className="field"> Address : </span> {this.state === null ? <LineShimmer styles={{width: "50%",height: "1.2em"}}/> : <span className="answer">{this.state.address}</span>}</li>
                                    <li><span className="field"> Email : </span> <span className="answer">{ this.state === null ? <LineShimmer styles={{width: "50%",height: "1.2em"}}/> : this.state.email}</span></li>
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