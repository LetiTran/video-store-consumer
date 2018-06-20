import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SelectedMovie extends Component {

  render () {
    return (
      <h4 > Selected Movie: {this.props.movieName} ID: {this.props.movieId} </h4>
    )
  }
}

export default SelectedMovie;

SelectedMovie.propTypes = {
movieName:  PropTypes.string.isRequired,
movieId: PropTypes.number.isRequired
}
