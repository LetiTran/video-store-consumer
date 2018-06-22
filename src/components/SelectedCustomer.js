import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SelectionBar.css'


class SelectedCustomer extends Component {

  render () {
    return (
      <div className='selected-customer'>
        <h4>
        Selected Customer:
        </h4>
        <p>{this.props.customerName}</p>
      </div>
    )
  }
}

export default SelectedCustomer;

SelectedCustomer.propTypes = {
customerName: PropTypes.string.isRequired,
}
