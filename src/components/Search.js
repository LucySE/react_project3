import React from 'react';

class Search extends React.Component {

  state = {
    postal_code: '',
    radius: '20'
  };

  handleChange = (ev) => {
    this.setState({ postal_code: ev.target.value });
  }

  handleRadiusChange = (ev) => {
    this.setState({ radius: ev.target.value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    console.log('search for:', this.state.postal_code);

    this.props.history.push(`/search/${this.state.postal_code}/${this.state.radius}`);
  }
  render(){
      return (
        <div>
          <form onSubmit={ this.handleSubmit }>
            <input type="text" placeholder="Enter postcode" onChange={ this.handleChange }/>
            <select onChange={ this.handleRadiusChange }>
              <option value="1">1 km</option>
              <option value="2">2 km</option>
              <option value="3">3 km</option>
              <option value="4">4 km</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
              <option value="20" selected>20 km</option>
            </select>
            <button>Search</button>
          </form>
        </div>
      );
    } // render

  } // class DogPark

  export default Search;
