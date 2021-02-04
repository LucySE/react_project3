import React from 'react';
import axios from 'axios'
import {config} from './Constants'


class BookingConfirmation extends React.Component{

  componentDidMount(){

    axios.post( config.url.API_URL + `/dogparks/${this.props.match.params.id}/book`, {
      booking_start_date: this.props.match.params.booking_start_date,
      booking_end_date: this.props.match.params.booking_end_date

    })
    .then( (res) => {
      console.log('response:', res.data);
      this.setState({ dogparks: res.data });
     // save// save into state
    })
    .catch( console.warn );

  }//end of componentdidMount

  render(){
      return(
          <div className="App">
              <h2>
              Dog Parking.
              </h2>
              <p> Hello and welcome to dog parking, never leave home without your BFF again.</p>

          </div>
      ); // return
  } // render
} //class


export default BookingConfirmation
