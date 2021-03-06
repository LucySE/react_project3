import React from 'react';
import axios from 'axios';
// import 'xtreme-admin-lite-master';

import Login from './Login'
import MyProfile from './MyProfile'
import Search from './Search';
import SearchResults from './SearchResults';
import BookingConfirmation from './BookingConfirmation';
import './App.css';


import Home from './Home';
import {config} from './Constants'



import { Route, Link, HashRouter as Router  } from 'react-router-dom';
// Add this at the top of your file



// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends React.Component {
  //App state
  state = {
  currentUser: undefined
  }

  //function to run on component mounting
  componentDidMount(){
    this.setCurrentUser();
  }

  //function to set the state to the current logged in user

  setCurrentUser = () => {
    let token = "Bearer " + localStorage.getItem("jwt");
    console.log("token",token);
    axios.defaults.headers.common['Authorization'] = token;
    axios.get(`${config.url.API_URL}/users/current`)
    .then(res => {
      console.log("user", res.data);
      this.setState({currentUser: res.data})
    })
    .catch(err => console.warn(err))
  }

  handleLogout = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined;
  }

  render(){

    return (
      <div className="Home">
        // <h1><img src="https://res.cloudinary.com/do9y9tnbr/image/upload/v1612424564/dogpark_photos/dog_parking_logo_pbxj6m.png"/></h1>


        <Router>
        {/* Do we need a nav for the react pages? Or only for the rails pages? */}
          <nav>
            {/* Show one of two nav bars depending on if the user is logged in */}
             {
               this.state.currentUser !== undefined
               ?
               (
                 <ul>
                   <li>Welcome {this.state.currentUser.name} | </li>
                   <li><Link to='/my_profile'>My Profile</Link></li>
                   <li><Link onClick={this.handleLogout} to='/'>Logout</Link></li>
                 </ul>
               )
               :
               (
                 <ul>
                   <li><Link to='/login'>Login</Link></li>
                 </ul>
               )
             }
            <Link to="/">Home</Link> |
            <Link to="/Search">Search</Link>|

            <br />
            <Route component={ Search } />
          { /* appears on every route */ }
          </nav>
          <hr />
            <Route exact path='/my_profile'
              render={(props) => <MyProfile user={this.state.currentUser}{...props}/>}
            />
            <Route
              exact path='/login'
              render={(props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>}
            />
          <Route exact path="/" component={ Home } />
          <Route exact path="/search/:postal_code/:radius/:booking_start_date/:booking_end_date"  component={ SearchResults } />
          <Route exact path="/dogparks/:id/book/:booking_start_date/:booking_end_date"  component={ BookingConfirmation } />

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
