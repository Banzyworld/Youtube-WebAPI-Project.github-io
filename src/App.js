import Sidebar from './Components/Sidebar';
import './App.css';
import Header from './Components/Header';
import Videodisplay from './Components/Videodisplay';
function App() {
	return (
		<div className="App">
			<Header />
			<div className="app__mainpage">
				<Sidebar className="margin-right" />
				<Videodisplay />
			</div>
		</div>
	);
}

export default App;
