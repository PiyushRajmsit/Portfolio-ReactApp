import React,{Component,Fragment} from 'react';
import Education from './Education/Education';
class Educations extends Component{

    state = {
        education : [{
            date: " Aug 2015 - Jun 2019 ",
            degree : " B.Tech - Computer Science Engineering ",
            school : " Guru Gobind Singh Indraprastha University, India",
        },
        { 
            date : " April 2009 - April 2015  ",
            degree : " XII | CBSE ",
            school : " Delhi Public School , Dwarka (New Delhi) "
        }]

    }

    render(){

        let education = this.state.education.map(edu => (
            <Education key={edu.date} date={edu.date} degree={edu.degree} school={edu.school}/>
        ));

        return(
            <Fragment>
                <div id="education">
                    <h2 className="sub-heading"> Education :</h2>
                    <div>
                        {education}
                    </div>
                </div>

            </Fragment>
        );
    }
}
export default Educations;