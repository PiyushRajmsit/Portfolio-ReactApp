import React,{Component,Fragment} from 'react';
import Achievement from './Achievement/Achievement';
import axios from '../../../axios';

class Achievements extends Component{

    state = {
        achievements : [{
            date : "2018",
            about : " Qualified for Google Codejam 2018 Round 3,Ranked 1800 out of 62000 coders."
        },{
            date : "2018",
            about : "Secured 2nd rank out of 800 Coders in Coding Competition by Coding Club.",
        }]

    }

    componentDidMount(){
        axios.get('/achievements.json')
        .then(response =>{
            const achievements = [];
            for(let key in response.data){
                achievements.push({
                    ...response.data[key]
                });
            }
            this.setState({achievements: achievements});
        }).catch(error =>{
            console.log(error.data);
        })
    }

    render(){
        let achievements = this.state.achievements.map(ach => (
            <Achievement key={ach.about} date={ach.date} about={ach.about}/>
        ));


        return(
            <Fragment>
                <div id="achievements">
                    <h2 className="sub-heading"> Achievements :</h2>
                    <div>
                        {achievements}
                    </div>
                </div>
            </Fragment>
        );

    }


}
export default Achievements;