import logo from './logo.svg';
import './App.css';
import Login from './login'
import {BrowserRouter as Router,Navigate, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      

      
        <Routes>
       
        <Route exact path="/" element={<Login/>} />
        
        </Routes>
        
      </Router>
  );
}

export default App;
