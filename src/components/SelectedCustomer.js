import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SelectedCustomer extends Component {

  render () {

    return (
      <h4 > Selected Customer: {this.props.customerName} </h4>
    )
  }
}

export default SelectedCustomer;

SelectedCustomer.propTypes = {

}

// hidden class on css in a conditional statement:
// className={this.props.customerName === 'Please Select a Customer' ? "hidden" : ""}
