import React from 'react';

import axios from 'axios';
import {config} from './Constants'

import { Link } from 'react-router-dom';



class SearchResults extends React.Component {

    state ={
      dogparks: []
    };

    fetchDogparks = () => {

      axios.get( config.url.API_URL + "/search", {
        params: {
          postcode: this.props.match.params.postal_code,
          radius: this.props.match.params.radius,
          booking_start_date: this.props.match.params.booking_start_date,
          booking_end_date: this.props.match.params.booking_end_date

        }
      })
      .then( (res) => {
        console.log('response:', res.data);
        this.setState({ dogparks: res.data });
       // save// save into state
      })
      .catch( console.warn );

    } // fetchFlights

    componentDidMount(){
      console.log('mounted');
      this.fetchDogparks();
    }

    componentDidUpdate(prevProps){
      const {postal_code, radius, booking_start_date, booking_end_date} = this.props.match.params;
      if(
        postal_code !== prevProps.match.params.postal_code
        ||
        radius !== prevProps.match.params.radius
        ||
        booking_start_date !== prevProps.match.params.booking_start_date
        ||
        booking_end_date !== prevProps.match.params.booking_end_date
       ){
      this.fetchDogparks();
      }
    } //end of componentdidUpdate

    render() {
        return (
          <ul>

          { this.state.dogparks.map(dogpark => (
                <li>
                   <Link to={`/dogparks/${dogpark.id}/book/${this.props.match.params.booking_start_date}/${this.props.match.params.booking_end_date}`}>
                    {dogpark.dogpark_name}
                  </Link>
                </li>
              ))}
          </ul>

        ); // return
    } // render
} // class SearchResults

export default SearchResults;
