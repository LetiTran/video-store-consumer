import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedCustomer from './SelectedCustomer.js'
import SelectedMovie from './SelectedMovie.js'

class SelectionBar extends Component {

  render () {
    return (
      <div>
      <SelectedCustomer customerName={this.props.customerName}/>
      <SelectedMovie movieName={this.props.movieName}/>
      </div>
    )
  }
}

export default SelectionBar;

SelectionBar.propTypes = {
customerName: PropTypes.string.isRequired,
movieName: PropTypes.string.isRequired,
}
