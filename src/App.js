import Sidebar from './Components/Sidebar';
import './App.css';
import Header from './Components/Header';
import Videodisplay from './Components/Videodisplay';
import SearchBarPage from './Components/SearchBarPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {


  return (
   <div className="App">
      <Router>
      <Header/>
         <Switch>
            <Route path='/search/:searchQuery'>
               <div className="app__mainpage">
                  <Sidebar />
                  <SearchBarPage />
               </div>
            </Route>
            <Route path='/'>
               <div className="app__mainpage">
                  <Sidebar />
                  <Videodisplay />
               </div>
            </Route>
         </Switch>
      </Router>
   </div>
  );
}

export default App;

