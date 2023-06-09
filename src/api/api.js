import axios from 'axios';
 // custom instance
const customInstance = axios.create ({
    baseURL : 'https://admin-api-dev.effigo.in/effigo/api/admin/v1/uom/nccltd',

});

// interceptor for request
customInstance.interceptors.request.use(
    (request) => {
        console.log('request sent');
        return request;
    },
    (error) => {
        console.log(error.response);
        if(error.response.status === 400){
            console.log('bad request');
        }
        return Promise.reject(error);
    }
)


// interceptors for response

customInstance.interceptors.response.use(
    (response) =>{
        console.log('got response');
        return response;
    } ,
    (error) => {
        console.log(error.response);
        if(error.response.status === 400){
            console.log('bad request');
        }
        return Promise.reject(error);

    }

)

export default customInstance;