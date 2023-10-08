
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    {/* <div className="bg-dark">
    <h1 className='text-success'>Hello world </h1> 
    </div> */}
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
   
    </BrowserRouter>
    
    
    </>
  )
}

export default App
