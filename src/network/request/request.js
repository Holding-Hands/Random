import axios from 'axios';
 export function request(config) {
     const instance=axios.create({
         // baseURL:"http://123.207.32.32:8000/api/vip",
       baseURL:"http://106.54.54.237:8000/api/v1",
     });

     return instance(config)
 }

 export function register(config) {
   const instance=axios.create({
     baseURL:"http://121.42.13.36:8081/serve/register.php",
     method:"POST",
     headers: {
       "Content-Type": "application/x-www-form-urlencoded"
     }
   });

   return instance(config)
 }




