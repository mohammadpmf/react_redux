import axios from "axios";

const api = axios.create({baseURL: "http://127.0.0.1:8000/"});


api.interceptors.request.use(
  (request) => {
    // request.headers.alaki="alak"; // اضافه میکرد. اما موقع ریترن اون ور ارور میداد که الکی داخل هدر مشکل داره.
    request.headers.Authorization = "alaki token";
    // console.log(`${request.method} request set to ${request.url}`)
    // console.log(request)
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error)
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(response)
    console.log(`Status Code: ${response.status}\nStatus Text: ${response.statusText}`)
    return response.data; // میتونیم تو اینترسپتور دیتا رو ریترن کنیم بعد دیگه
    // لازم نیست تو کدهامون از جوابی که اکسیوس برگردونده بیایم دیتا رو در بیاریم
    // اونجا دیگه مستقیما خود اطلاعات جیسون رو داریم.
  },
  (error) => {
    console.log(error);
    return Promise.reject(error)
  }
)


export default api;