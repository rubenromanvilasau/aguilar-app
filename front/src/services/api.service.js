import axios from 'axios';

class apiService {

    constructor() {
        this.url = 'http://localhost:3000/api';
    }

    async get(endpoint) {
        return axios(`${this.url}/${endpoint}`)
    }

    async creatUser( data ) {
        return axios.post(`${this.url}/users`, data);
    }

}

export default new apiService();