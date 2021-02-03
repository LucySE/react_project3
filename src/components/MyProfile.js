import React from 'react'




class MyProfile extends React.Component{
  // state = {
  //   currentUser: {
  //     name: '',
  //     email: ''
  //   }
  // }

  // componentDidMount(){
  //   let token = "Bearer " + localStorage.getItem("jwt");
  //   axios.get(`${BASE_URL}/users/current`, {
  //     headers: {
  //       'Authorization': token
  //     }
  //   })
  //   .then(res => {
  //     this.setState({currentUser: res.data})
  //   })
  //   .catch(err => console.warn(err))
  // }

  render(){
    if(this.props.user === undefined){
      return <p>Loading..</p>;

    }

    return(
      <div>
        <h1>Hello {this.props.user.name}</h1>
        <h4>Your email is {this.props.user.email}</h4>
      </div>
    );
  }//render

}//class MyProfile


export default MyProfile
