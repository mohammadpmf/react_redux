// // _______________ Arrow function => ________________________
// // function dublicate(n){
// //     const a=n*2
// //     return a;
// // }
// const dublicate = n => n * 2;
// const multiply = (n1, n2) => n1 * n2;
// const toolani = (n1, n2) => {
//     const t1 = n1 + 3;
//     const t2 = n2 - 3;
//     return t1 * t2;
// }

// console.log(dublicate(7))
// console.log(multiply(2, 3))
// console.log(toolani(5, 5))
// // _____________________ map _______________________________
// const arr = [1, 2, 3];
// const newArr = arr.map(n => n * 2)
// console.log(newArr);
// // __________________________filter___find_______________________
// const numbers = [14, 28, 21, 66, 4, 5]
// const newNumbers = numbers.filter(x => x > 10)
// console.log(newNumbers)
// const foundedNumber = numbers.find(x => x > 10)
// console.log(foundedNumber)
// __________________reduce____________________
// const numbers = [1, 2, 3, 4, 5]
// const result = numbers.reduce(
//     (accumulator, currentItem) => accumulator + currentItem,
//     0
// );
// console.log(result);
// const result2 = numbers.reduce(
//     (accumulator, currentItem) => accumulator * currentItem,
//     1
// );
// console.log(result2);
// const result3 = numbers.reduce(
//     (accumulator, currentItem) => accumulator + currentItem + 2,
//     5
// );// اینو اضافه برای خودم نوشتم.
// // اکومولیتور خروجی مرحله قبل هست تو که تو مرحله بعد اجرا میشه. اما دفعه اول
// // ما مرحله قبل نداریم. پس بهش مقدار اولیه میدیم. آخرین بار هم خروجی رو به عنوان
// // نتیجه ردیوس میکنه و به ما تحویل میده.
// console.log(result3);

// __________________template literals____________________
// const name = "Mohammad"
// const age = 35
// const text = `My name is ${name} and my age is ${age} years old.`
// console.log(text)
// __________________ Destructuring ____________________
// const data = {
//     name: "Mohammad",
//     age: 35,
//     address: { city: "Rasht", street: "Azadegan" },
// }
// // const name = data.name
// // const age = data["age"]
// // const city = data.address.city
// // ...
// // yek raveshe sade tar (Destructuring)
// // const { name, address, age } = data
// // const { city, street } = address
// // in 2 marhale i bood. dakhelesh ham meshe dobare destructre kard ba : . yani in shekli:
// // const { name address: { street, city }, age } = data
// // montaha age khode address ro lazem darim, oonam joda minvisim yani in shekli:
// const {
//     name,
//     address,
//     address: { street, city },
//     age
// } = data
// // تو ریکت خیلی استفاده میشه.
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(city)
// console.log(street)
// __________________spread operator ____________________
// const numbers1 = [1, 2, 3, 4]
// const letters = ["a", "s", "d"]
// const numbers2 = [6, ...numbers1, 8, 9, 0, ...letters]
// console.log(numbers1);
// console.log(numbers2);
// _________async js - promise ____________________
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))
// _________async/await ____________________
// async function getData() {
//       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       json = await res.json()
//       console.log(json)
// }
// روش دوم و اگر به صورت ارو فانکشن باشه.
// const getData = async () => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       json = await res.json()
//       console.log(json)
// }
// تمرین اضافه خودم برای پارس کردن جیسون
// async function getData() {
//       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       console.log(res)
//       json = await res.json()
//       console.log(json)
//       const { completed, id, userId, title } = json
//       console.log(userId)
//       console.log(id)
//       console.log(title)
//       console.log(completed)
// }
// تمرین اضافه بیشتر
// const getData = async () => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
//       console.log(res)
//       json = await res.json()
//       console.log(json)
//       const { name, id, username, email, address,
//             address: { street, suite, city, zipcode, geo, geo: { lat, lng }, },
//             phone, website, company,
//             company: { name: companyName, catchPhrase, bs } // اینجا رو از دیپ سیک پرسیدم. چون کلمه نیم تکراری بود و ارور میداد. با : میتونیم بهش بگیم که یه اسم جدید براش بذاره.
//       } = json
//       console.log(id)
//       console.log(name)
//       console.log(username)
//       console.log(email)
//       console.log(address)
//       console.log(street)
//       console.log(suite)
//       console.log(city)
//       console.log(zipcode)
//       console.log(geo)
//       console.log(lat)
//       console.log(lng)
//       console.log(phone)
//       console.log(website)
//       console.log(company)
//       console.log(companyName)
//       console.log(catchPhrase)
//       console.log(bs)
// }
// getData()
// _________export/import ____________________
// import alaki from "./functions.js";
// import { dublicate, name } from "./functions.js";
// یا ایمپورت یکجای نیمد و دیفالت با هم
import alaki, { dublicate, name } from "./functions.js";
console.log(dublicate(3))
console.log(name)
alaki()
