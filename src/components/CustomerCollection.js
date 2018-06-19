import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer.js'

class CustomerCollection extends Component {

  constructor() {
    super();
    this.state = {
      selectedCustomer: 'Please select a customer',
      id: '',
    };
  }


  customerSelection = (customerName) => {
    const updateState = {};

    if (customerName === this.state.selectedCustomer) {
      updateState["selectedCustomer"] = 'Please select a customer',
      this.setState(updateState);
    } else {
      updateState["selectedCustomer"] = customerName;
      this.setState(updateState);
    }
  }

  render () {

    const name = "Random Customer"
    const address = "Random Adress"
    const city = "Seattle"
    const state = "WA"
    const postal_code = "98000"
    const phone = "000 111 222 333"
    const account_credit = "12.4"

    return (
      <selection> <h4>Selected Customer: {this.state.selectedCustomer} </h4>
      <Customer
      customerSelectionCallBack={this.customerSelection}
      name={name}
      address={address}
      city={city}
      state={state}
      postal_code={postal_code}
      phone={phone}
      account_credit={account_credit}
      />
      </selection>
    )
  }
}

export default CustomerCollection;
