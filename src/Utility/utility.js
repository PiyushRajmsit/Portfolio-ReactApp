import axios from '../axios';
import {resumeUrl} from '../Constant/constant';

const getResumeUrl = () =>{
    return axios.get('resume.json')
    .then(response =>{
        response = response.data;
        return response;
    }).catch(error => {
        console.log(error);
        return resumeUrl;
    })
}

export default getResumeUrl;