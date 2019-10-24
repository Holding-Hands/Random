import axios from 'axios';
 export function request(config) {
     const instance=axios.create({
         baseURL:"http://123.207.32.32:8000/api/v1",
     });

     return   instance(config)
 }





