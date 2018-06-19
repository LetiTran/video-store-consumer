import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedCustomer from './SelectedCustomer.js'

class SelectionBar extends Component {

  render () {
    return (
      <SelectedCustomer customerName={this.props.customerName}/>
    )
  }
}

export default SelectionBar;

SelectionBar.propTypes = {
customerName: PropTypes.string.isRequired,
}
