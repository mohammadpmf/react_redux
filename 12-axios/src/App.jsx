import axios from "axios"
import { useEffect, useState } from "react"
import Post from "./components/Post";
import api from "./services/config";


function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    // axios.get("http://127.0.0.1:8000/movies/")
    api.get("/movies")
    // .then((res) => setMovies(res.data.results)) // این تو ورژن اولیه بود.
    // وقتی اینترسپتور رو تغییر دادم و گفتم خودش دیتا رو ریترن کنه اینجا دیگه
    // لازم نیست از تو جیسونش دیتا رو در بیاریم. خودش دیتا رو به ما داده.
    // این تغییر رو همینجا فقط دادم و برای کامنت های زیری که با اکسیوس دات آل
    // و اکسیوس دات اسپرد کار کرده بودم نذاشتم. اما اونجا هم دیگه دات دیتا ها لازم
    // نیست اگه اینترسپتورم رو به این صورتی که نوشتم بذارم.
    // اولش اینترسپتور رو برای خود اکسیوس نوشتیم. بعد برای قشنگ تر شدن
    // یه نمونه از اکسیوس ساختیم با اسم ای پی آی و بیس یو آر ال هم بهش دادیم.
    // این طوری دیگه هر بار داریم گت یا پست و بقیه کارها رو هم انجام میدیم لازم
    // نیست کل یو آر ال رو بنویسیم.
      .then((res) => setMovies(res.results))
      .catch((error) => console.log(error));
  }, [])
  // useEffect(() => {
  //   axios.all([
  //     axios.get("http://127.0.0.1:8000/movies/"),
  //     axios.get("http://127.0.0.1:8000/series/"),
  //     axios.get("http://127.0.0.1:8000/music/"),
  //   ])
  //     .then(
  //       axios.spread((movies, series, music) => {
  //         setMovies(movies.data.results)
  //         console.log(series.data)
  //         console.log(music.data.results)
  //       })
  //     )
  //     .catch((error) => console.log(error))
  // }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
      <Post />
    </div>
  )
}

export default App
