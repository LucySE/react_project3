import React from 'react'



class MyProfile extends React.Component{


  render() {
    if(this.props.user === undefined){
      return <p>Loading..</p>;

    }

    return (
    <div>
      <h1>Hello {this.props.user.name}!</h1>
      <p>We love {this.props.user.dog_name}.</p>
       <p>Your email is {this.props.user.email}.</p>
       <h2>{this.props.user.dog_name}'s bookings</h2>
       <ul>
       {
          this.props.user.bookings.map(booking => (
            <li>
              {
                new Date(booking.booking_start_date).toLocaleString('en-AU')
              }
              <br/>
              <img src={booking.photo} width="400" height="267" />
            </li>
          ))
        }
        </ul>
      </div>
      ); //return
    }//render

}//class MyProfile

export default MyProfile
