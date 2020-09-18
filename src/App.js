import React,{Component,Fragment} from 'react';
import './App.css';
import Navigation from './Containers/Navigation/Navigations';
import Middle from './Containers/MiddleContent/Middle';
import Intro from './Containers/AboutMe/AboutMe';
import Resume from './Containers/Resume/Resume';
import Contact from './Containers/ContactMe/Contact';
import Footer from './Containers/Footers/Footer';
class App extends Component{

  render(){
    return(
      <Fragment>
        <Navigation/>
        <Intro/>
        <Middle/>
        <Resume/>
        <Contact/>
        <Footer/>
      </Fragment>
    )
  }

}


export default App;
