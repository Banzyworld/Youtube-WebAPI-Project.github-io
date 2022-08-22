import Sidebar from './Components/Sidebar';
import './App.css';
import Header from './Components/Header';
import Videodisplay from './Components/Videodisplay';
function App() {
  return (
   <div className="App">
      <Header/>
      <Sidebar/>
      <Videodisplay />
   </div>
  );
}

export default App;

