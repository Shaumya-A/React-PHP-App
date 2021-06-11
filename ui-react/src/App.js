import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import View from './components/View';
import Signin from './components/signin';

function App() {

  return (
    <Router>
      <div className="container">
        <h1>Bizlogic</h1>
        <Link className="btn btn-primary" to={'/login'}>Get Started</Link>

        <Switch>
          <Route exact path='/login' component={ Login } />
          <Route path='/signin' component={ Signin } />
          <Route path='/view' component={ View } />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
