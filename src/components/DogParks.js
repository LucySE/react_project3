import React from 'react';

class DogParks extends React.Component {

  state = {
    postal_code: ''
  };

  handleChange = (ev) => {
    this.setState({ postal_code: ev.target.value });
  }
  handleSubmit = (ev) => {
    ev.preventDefault();

    console.log('search for:', this.state.postal_code);

    this.props.history.push(`/search/${this.state.postal_code}`);
  }
  render(){
      return (
        <div>
          <form onSubmit={ this.handleSubmit }>
            <input type="text" placeholder="Enter postcode" onChange={ this.handleChange }/>
            <button>Search</button>
          </form>
        </div>
      );
    } // render

  } // class DogPark

  export default DogParks;
