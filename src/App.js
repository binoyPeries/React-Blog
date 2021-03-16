import Navbar from './navbar';
import Home from './home';
function App() {
  const titleName = "welcome to homepage" 
  //we cant output objects directly
  return (
    <div className="App">
    <Navbar/>
    <div className="content">
        <Home/>

    </div>
    
    </div>
  );
}

export default App;
