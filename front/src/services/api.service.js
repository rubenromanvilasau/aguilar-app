import axios from 'axios';

class apiService {

    constructor() {
      console.log('import.meta.env.BACKEND_URI', import.meta.env.VITE_BACKEND_URI);
        this.url = import.meta.env.VITE_BACKEND_URI;
    }

    async get(endpoint) {
        return axios(`${this.url}/${endpoint}`)
    }

    async createUser( data ) {
        return axios.post(`${this.url}/users`, data);
    }

    async saveImage( data ) {
        return axios.post(`${this.url}/images`, data);
    }

    async getImage(id) {
        try {
          const response = await axios.get(`${this.url}/images/${id}`, { responseType: 'arraybuffer' });
    
          console.log('response', response)
        //   const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    
        //   const imageUrl = `data:image/png;base64,${base64Image}`;
    
          return response;
        } catch (error) {
          console.error('Error al obtener la imagen:', error);
          throw error;
        }
    }

}

export default new apiService();