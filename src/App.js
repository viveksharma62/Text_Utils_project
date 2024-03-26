import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Route,
 Switch 
} from "react-router-dom";


export default function App() {
  const [Mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
         if(Mode === 'light'){
          setMode('dark');
          document.body.style.background='#042743';
          showAlert("Dark mode has been enabled" , "success");
         
          }
         else{
          setMode('light');
          document.body.style.background='white';
          showAlert("Light mode has been enabled" , "primary");
          // document.title ="TextUtils - Light Mode";



         }
  }
  return (
    <>
    <Router>
      <Navbar title="Viveksharma62"  about="About"  mode={Mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className='container my-3'>
        <Switch>
             <Route exact path="/About">
             <About mode={Mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="try TextUtil - Word Counter Character Counter, Remove extra spaces" mode={Mode} />
          </Route>
          </Switch>
         </div>
      </Router>
      </>
  );
  }



