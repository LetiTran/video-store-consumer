import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedCustomer from './SelectedCustomer.js'
import SelectedMovie from './SelectedMovie.js'

class SelectionBar extends Component {

  render () {
    return (
      <div>
      <SelectedCustomer
      customerName={this.props.customerName}
      customerId={this.props.customerId}/>
      <SelectedMovie
      movieName={this.props.movieName} movieId={this.props.movieId}/>
      </div>
    )
  }
}

export default SelectionBar;

SelectionBar.propTypes = {
customerName: PropTypes.string.isRequired,
customerId: PropTypes.number.isRequired,
movieName: PropTypes.string.isRequired,
movieId: PropTypes.number.isRequired,
}
