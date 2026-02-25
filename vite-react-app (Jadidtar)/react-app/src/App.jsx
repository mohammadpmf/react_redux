import Form from "./Form.jsx"
import Header from "./Header.jsx"
import CourseList from "./CourseList.jsx"
import Banner from "./Banner.jsx"
import Counter from "./Counter.jsx"

function App() {

  return (
    <div>
      <Form />
      <Counter />
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
