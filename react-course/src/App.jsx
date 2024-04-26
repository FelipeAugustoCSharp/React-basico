import Header from './components/header/Header'
import { LoginForm } from './components/login-form/LoginForm'
//import { InputWithText } from './components/input-with-text/InputWithText'

function App() {


  return (
    <>
      <Header hideMenu={true} name="renato"/>
     {/* <InputWithText/> */}
     <LoginForm />
    </>
  )
}

export default App
