
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { useSelector } from 'react-redux'
import Spinner from './components/Spinner.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx'



function App() {
  const {loading} = useSelector(state => state.alerts)
console.log(loading)
  return (
    <>
    <BrowserRouter>

    {loading ? <Spinner/> : <><Routes>

      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      
      <Route path='/login' element={ <PublicRoute><Login/></PublicRoute> }/>
      <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
    </Routes>
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

    </>
    
    }
    
    {/* <div className="bg-dark">
    <h1 className='text-success'>Hello world </h1> 
    </div> */}
     
    </BrowserRouter>
    
    
    </>
  )
}

export default App
