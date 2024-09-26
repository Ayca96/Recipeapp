
import AppRouter from "./router/AppRouter"
import  "./App.css"
import AuthContext from "./context/AuthContext"


function App() {
  

  return (
    <AuthContext>
     <AppRouter/>
    </AuthContext>
  )
}

export default App
