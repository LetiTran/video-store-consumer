import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SelectedCustomer extends Component {

  render () {
    return (
      <h4 > Selected Customer: {this.props.customerName} ID: {this.props.customerId} </h4>
    )
  }
}

export default SelectedCustomer;

SelectedCustomer.propTypes = {
customerName: PropTypes.string.isRequired,
customerId: PropTypes.number.isRequired,
}

// hidden class on css in a conditional statement:
// className={this.props.customerName === 'Please Select a Customer' ? "hidden" : ""}
