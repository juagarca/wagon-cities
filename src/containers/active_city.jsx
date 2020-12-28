import React, { Component } from 'react';

import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    if (this.props.activeCity) {
      const imageUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      return (
        <div className="active-city">
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img src={imageUrl} alt="" />
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
