import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    const imageUrl = "https://kitt.lewagon.com/placeholder/cities/london";
    return (
      <div className="active-city">
        <h3>Name</h3>
        <p>Address</p>
        <img src={imageUrl} alt="" />
      </div>
    );
  }
}


export default ActiveCity;
