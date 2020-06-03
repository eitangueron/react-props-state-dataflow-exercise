import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.reservations.map((reservation,i) => <p key={i}>{reservation.name} has a reservation on {reservation.day} at {reservation.time}</p>)}
      </div>
    )
  }
}

export default Calendar