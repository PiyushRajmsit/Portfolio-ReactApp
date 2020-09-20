import axios from 'axios';

const instance = axios.create({
    baseURL : "https://my-portfolio-db48e.firebaseio.com/"
});

export default instance;