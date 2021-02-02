import React from 'react';


import Login from './Login';
import Search from './Search';
import SearchResults from './SearchResults';
import Home from './Home';

import { Route, Link, HashRouter as Router  } from 'react-router-dom';
// Add this at the top of your file


// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends React.Component {


  render(){

    return (
      <div className="Home">
        <h1>Welcome to Dog Parking</h1>


        <Router>
        {/* Do we need a nav for the react pages? Or only for the rails pages? */}
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/Search">Search</Link>|
            <Link to="/Login">Login</Link>
            <br />
            <Route component={ Search } />
          { /* appears on every route */ }
          </nav>
          <hr />

          <Route exact path="/" component={ Home } />
          <Route exact path="/search/:postal_code/:radius"  component={ SearchResults } />
          <Route component={ Login } /> 
        </Router>

        <footer>
          <hr />
          &copy; 2021 Lucy Wirth
        </footer>

      </div>
    ); // return

  } // render()
} // class App

export default App;
