import axios from 'axios';
const baseUrl = import.meta.env.VUE_APP_API_URL;

const api = {

    async login(payload){
        const res = await axios.post(baseUrl + 'login', payload)
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error.response;
        })
        return res;
    },

};
  
export { api } ;