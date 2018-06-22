import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectionBar.css'


class SelectedMovie extends Component {

  render () {
    return (
      <div className="selected-movie">
        <h4>
        Selected Movie:
        </h4>
        <p>{this.props.movieName}</p>
      </div>
    )
  }
}

export default SelectedMovie;

SelectedMovie.propTypes = {
movieName: PropTypes.string.isRequired,
}
