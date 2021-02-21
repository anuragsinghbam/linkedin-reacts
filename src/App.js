
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Navbar from './components/Navbar/Navbar'
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";


function App() {


  return (
    <div className="App">
 
      <Router>


      <Navbar/>
   <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/signup" component={Signup}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/profile" component={Profile}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App
