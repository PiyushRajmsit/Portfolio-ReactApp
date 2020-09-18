import React,{Component,Fragment} from 'react';
import Project from './Project/Project';

class Projects extends Component{
    state = {
        projects : [{
            date: "Aug 2018 – Nov 2018",
            title:"KEYPHRASE EXTRACTION AND TEXT SUMMARIZATION",
            about: "Applied NLTK and Text Summarization Algorithms to Process Text Document for Extracting Essential Data from the Text documents using TF-IDF Algorithm for the Purpose of Text Summarization using Text Rank and Single Value Decomposition Algorithms.Used Python, Jupyter Notebook."
        },
        {
            date: "Dec 2017 – Mar 2018",
            title : "WEB APP FOR SHARING POST ON SOCIAL PLATFORMS FOR AAP",
            about : "Built social media dashboard for the party to provide a common platform to promote the party on various social media platforms and also keep track of the party activists contribution for the party. Used Spring MVC, Facebook, Twitter, WhatsApp APIs and Shell Scripting for the project."
        }]

    }

    render(){
        let projects = this.state.projects.map(pro => (
            <Project key={pro.date} date={pro.date} title={pro.title} about={pro.about}/>
        ));
        return(
            <Fragment>
                <div id="majorProjects">
                    <h2 className="sub-heading"> Major Projects :</h2>
                    <div>
                        {projects}
                    </div>
                </div>

            </Fragment>

        )

    }



}

export default Projects;