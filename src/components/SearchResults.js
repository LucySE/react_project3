import React from 'react';

import axios from 'axios';





const BASE_URL = 'http://localhost:3000'


class SearchResults extends React.Component {

    state ={
      dogparks: []
    };

    fetchDogparks = () => {

      axios.get( BASE_URL + "/dogparks")
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


    render(){
        return(
            <div className="App">
                <h2>
                    Search results for "{ this.props.match.params.dogparks}"
                </h2>

            </div>
        ); // return
    } // render
} // class SearchResults

export default SearchResults;
