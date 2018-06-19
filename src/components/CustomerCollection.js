import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer.js';
import axios from 'axios';


class CustomerCollection extends Component {

  constructor() {
    super();
    this.state = {
      selectedCustomer: 'Please select a customer',
      id: '',
      customers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      this.setState({ customers: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderCustomerList = () => {
    const componentList = this.state.customers.map((customer,index) => {
      return (
        <Customer
          customerSelectionCallBack={this.customerSelection}
          key={index}
          name={customer.name}
          address={customer.address}
          city={customer.city}
          state={customer.state}
          postal_code={customer.postal_code}
          phone={customer.phone}
          account_credit={customer.account_credit}
          movies_checked_out_count={customer.movies_checked_out_count}
          registered_at={customer.registered_at}
        />

      );
    });

    return componentList
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


    return (
      <selection> <h4>Selected Customer: {this.state.selectedCustomer} </h4>

      <table>
      <th>Select</th>
      <th>Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Postal Code</th>
      <th>Phone</th>
      <th>Account Credit</th>
      <th>Movies Checked out Count</th>
      <th>Registered At</th>
        {this.renderCustomerList()}
      </table>

      </selection>
    )
  }
}

export default CustomerCollection;
