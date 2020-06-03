import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
        <div id="register">
          {this.props.reservations.map(reservation => <p>{reservation.day} at {reservation.time}</p>)}
        </div>)
  }
}

export default Register