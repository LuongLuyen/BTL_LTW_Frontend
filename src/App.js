import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import './Assets/custom.css'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import axios from 'axios'
import {useEffect,useState} from 'react'

function App() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  useEffect(() => {
    const userName = JSON.parse(sessionStorage.getItem('name'))
    const password = JSON.parse(sessionStorage.getItem('pass'))
    if (userName && password) {
     setUserName(userName)
     setPassword(password)
    }
  }, [])
  const checkLogin = ()=>{
    if (userName !== null && password !== null){
      return true
    }
    return false
  }
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/user")
  //   .then((response) => {
  //     setData(response.data)
  //   })
  // }, []) 
  // if (!data) return (
  //   <div className='loading'>
  //     <h1>Vui lòng chờ....</h1>
  //   </div>
  // )
  return (
    <Router>
      <Routes>
        <Route path='/home' element={checkLogin() ? <Home/>: <Login/>}/>
        <Route path='/' element={<Login />}/>
      </Routes>
    </Router>
  );
}
export default App;