import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {



handleInputChange = () => {
  
  this.props.customerSelectionCallBack(this.props.name)
  // // const fieldName = event.target.name;
  // // const fieldValue = event.target.value;
  //
  // const updateState = {};
  // // updateState[fieldName] = fieldValue;
  // updateState[name] = this.props.name;
  // this.setState(updateState);
}

  render () {

    return (
      <tr>
      <td> <input name="name" type="checkbox" onChange={this.handleInputChange}></input> </td>
      <td> {this.props.name} </td>
      <td> {this.props.address} </td>
      <td> {this.props.city} </td>
      <td> {this.props.state} </td>
      <td> {this.props.postal_code} </td>
      <td> {this.props.phone} </td>
      <td> {this.props.account_credit} </td>
      </tr>
    )
  }
}

export default Customer;

Customer.propTypes = {
  customerSelectionCallBack: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postal_code: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  account_credit: PropTypes.string.isRequired,
}