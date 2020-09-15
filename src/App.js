import React,{Component,Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Containers/Navigation/Navigations';
import Middle from './Containers/MiddleContent/Middle';
import Intro from './Containers/AboutMe/AboutMe';
class App extends Component{

  render(){
    return(
      <Fragment>
        <Navigation/>
        <Intro/>
        <Middle/>
      </Fragment>
    )
  }

}


export default App;
