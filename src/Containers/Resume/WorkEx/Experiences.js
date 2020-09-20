import React,{Component,Fragment} from 'react';
import Experience from './Experience/Experience';
import axios from '../../../axios';
class Experiences extends Component{
    state = {
        workExp:[
            {
                date: "February 2020 - Present",
                title : "Software Development Engineer",
                company : "Makemytrip",
                about: "Working as a Full-Stack Engineer in Flights Team Responsible. Working on ReactJs and SpringBoot Platform."
            },
            {
                date: " July 2019 - January 2020",
                title : "Software Development Engineer",
                company : "Hughes Systique Corporation",
                about: "Worked as a Backend-Engineer on Sling-TV App, An OTT(Over The Top) Video Streaming Service. Worked on Lua, Python, C++."
            }]

    }
    componentDidMount(){
        axios.get('/experience.json')
        .then(response =>{
            const fetchWorkEx = [];
            for(let key in response.data){
                fetchWorkEx.push({
                    ...response.data[key]
                })
            }
            this.setState({workExp : fetchWorkEx});
            // console.log(fetchWorkEx);
        }).catch(error =>{
            console.log(error);
        })
    }

    render(){
        let exp = this.state.workExp.map(ex => (
            <Experience key={ex.date} date={ex.date} title={ex.title} company={ex.company} about={ex.about} />
        ));
        return(
            <Fragment>
                <div id="workExperience">
                    <h2 className="sub-heading"> Work Experience:</h2>
                    <div>
                        {exp}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Experiences;