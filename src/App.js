import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage/HomePage'
// Shipper Auth
import SignInShipper from './components/pages/Signin/SignInShipper/SignInShipper'
import SignUpShipper from './components/pages/Signup/SignUpShipper/SignUpShipper'
// Carrier Auth
import SignInCarrier from './components/pages/Signin/SignInCarrier/SignInCarrier'
import SignUpCarrier from './components/pages/Signup/SignUpCarrier/SignUpCarrier'
// Recovery
import Recovery from './components/pages/Recovery/Recovery'
// Carrier
import Carrier from './components/pages/Carrier/Carrier' 
// Shipper 
import Shipper from './components/pages/Shipper/Shipper'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <HomePage />
        </Route>
        {/* Shipper Auth */}
        <Route exact path="/signinshipper" >
          <SignInShipper />
        </Route>
        <Route exact path="/signupshipper" >
          <SignUpShipper />
        </Route>
        {/* Carrier Auth */}
        <Route exact path="/signincarrier" >
          <SignInCarrier />
        </Route>
        <Route exact path="/signupcarrier" >
          <SignUpCarrier />
        </Route>
        {/* Recovery Password */}
        <Route exact path="/recovery" >
          <Recovery />
        </Route>
        {/* Shipper Home Page */}
        <Route exact path="/shipper"  >
          <Shipper />
        </Route>
        {/* Carrier Home Page */}
        <Route exact path="/carrier"  >
          <Carrier />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
