import Header from "./Header.jsx"
import CourseList from "./CourseList.jsx"
import Banner from "./Banner.jsx"

function App() {

  return (
    <div>
      <Header />
      <Banner 
      title= "My Title"
      description = "My Description"
      numOfStudents = {1234}
      />
      <CourseList />
    </div>
  )
}

export default App
