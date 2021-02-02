import React from 'react';

import axios from 'axios';



const BASE_URL = 'http://localhost:3000'


class SearchResults extends React.Component {

    state ={
      dogparks: []
    };

    fetchDogparks = () => {

      axios.get( BASE_URL + "/search", {
        params: {
          postcode: this.props.match.params.postal_code,
          radius: this.props.match.params.radius
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
      const {postal_code, radius} = this.props.match.params;
      if(
        postal_code !== prevProps.match.params.postal_code
        ||
        radius !== prevProps.match.params.radius
       ){
      this.fetchDogparks();
      }
    } //end of componentdidUpdate

    render() {
        return (
          <ul>
            { this.state.dogparks.map(dogpark => <li>{dogpark.dogpark_name}</li>)}
          </ul>
  
        ); // return
    } // render
} // class SearchResults

export default SearchResults;
