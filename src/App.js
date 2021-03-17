import Navbar from './navbar';
import Home from './home';
import CreateBlog from './createBlog';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import BlogDetails from './blogDetails';

//cover the app with router so thta it can be used anywahere
function App() {

 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      {/* makes sure that only one route is shown at a given time */}
      <Switch>
      {/* place all the routes here */}
        <Route exact path='/'>
            <Home/>
        </Route>

        <Route exact path='/create'>
            <CreateBlog/>
        </Route>

        <Route exact path='/blog/:id'>
            <BlogDetails/>
        </Route>

      </Switch>


      </div>
    
    </div>
    </Router>
  );
}

export default App;
