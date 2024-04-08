
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const[alert,setAlert]=useState(null);
  const showAlert =(message, type)=>{
     setAlert({
      msg: message,
      Type: type
     })
     setTimeout(() =>{
        setAlert(null);
     },1000)
  }


  const [mode, setMode] = useState('light');
  const  toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enable!", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#111421';
      showAlert("Dark mode enable!", "success");
    }
    
  }

 
  return (
   <>
    <Router>
    <Navbar title="TextUtils" home = "Home" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      
      <Route path='/' element={ <TextForm heading = "Enter the text to analyse" mode={mode} showAlert={showAlert}/>} />
      <Route path='About' element={<About  mode={mode}/>} />
         
    </Routes>
      
     
    </div>
    </Router>
   </>
  );
}

export default App;
