import Parent from "./components/Parent"
import WelcomeMessage from "./components/WelcomeMessage"
import WelcomePage from "./components/WelcomePage"

function App() {
  return (
    <>
      <h1>React Concepts</h1>
      <Parent />
      <WelcomePage>
        <WelcomeMessage userName="Mohammad" />
      </WelcomePage>
    </>
  )
}

export default App
