import React,{Component,Fragment} from 'react';
import Block from './Blocks/Block';

class Skill extends Component{
    state = {
        skills:["C/C++","Java","Python","Javascript","ReactJs","Spring MVC","NodeJs","MySql","HTML","CSS","BootStrap","Jquery","ShellScript"]
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