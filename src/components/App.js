import React from 'react';
import axios from 'axios';
// Add this at the top of your file


import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



const BASE_URL = 'http://localhost:3000/';

class App extends React.Component {

    render(){
      return (
        <div>

          <Router>
            <Navigation />
            <Route exact path="/" component={ Home } />
            <Route exact path="/procedures" component={ Procedures } />
            <Route exact path="/proceduresearch" component={ ProcedureSearch } />
            <Route exact path="/procedures/search/:query" component={ ProcedureSearchResults } />
            <Route exact path="/teethshop" component={ TeethSales } />
          </Router>

        </div>
      );
    }

  } // class App
  export default App;
