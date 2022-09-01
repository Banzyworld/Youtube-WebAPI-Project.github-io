import Sidebar from './Components/Sidebar';
import './App.css';
import Header from './Components/Header';
import Videodisplay from './Components/Videodisplay';
// import SearchBarPage from './Components/SearchBarPage';
// import {Router, Routes, Route} from 'react-router-dom';
// import {
//  //   Routes,
//   Route,
// } from "react-router-dom";

function App() {


  return (
   <div className="App">
      
   <Header/>
            
               <div className="app__mainpage">
               
                  <Sidebar />
                     
                  <Videodisplay />
                
               </div>
       
   </div>
  );
}

export default App;

