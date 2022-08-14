import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux'

import Login from './login'
import {BrowserRouter as Router,Navigate, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Navbar from './components/Nav/nav'
import Logout from './logout'
import PastOrders from './pastOrders'
import Profile from './Profile'


function App() {
  const loggedIn=useSelector((state)=>state.auth.loggedIn)

  return (
    <Router>
      
      {loggedIn ? <Navbar/>: <></> }
      
      
        <Routes>
        
        <Route exact path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>}/> 
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/past-orders" element={<PastOrders/>}/>
        <Route path="/profile" element={<Profile/>}/>

        </Routes>
        
      </Router>
  );
}

export default App;
