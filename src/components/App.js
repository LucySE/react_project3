import React from 'react';



import DogPark from './DogParks';
import SearchResults from './SearchResults';

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
            <Link to="/dogparks">Search</Link>
            <br />
              <Route path="/" component={ DogPark } /> { /* appears on every route */ }
          </nav>
          <hr />
            {


            }
          <Route exact path="/" component={ App } />
          <Route exact path="/dogparks/:postal_code" component={ SearchResults } />

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
