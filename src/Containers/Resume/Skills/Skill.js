import React,{Component,Fragment} from 'react';
import Block from './Blocks/Block';
import axios from '../../../axios';

class Skill extends Component{
    state = {
        skills:["C/C++","Java","Python","Javascript","ReactJs","Spring MVC","NodeJs","MySql","HTML","CSS","BootStrap","Jquery","ShellScript","SpringBoot"]
    }
    componentDidMount(){
        axios.get('/skills.json')
        .then(response =>{
            let skills = [];
            for(let key in response.data){
                skills = response.data[key];
            }
            this.setState({skills : skills});
        }).catch(error =>{
            console.log(error);
        })
    }
    render(){
        let blocks = this.state.skills.map(skill => (
            <Block key={skill} text={skill}/>
        ));
        return(
            <Fragment>
                <div id="skills">
                    <h2 className="sub-heading"> Skills :</h2>
                    <div className="row progress-circle mb-5">
                        {blocks}
                    </div>
                </div>
            </Fragment>
        );

    }
}

export default Skill;