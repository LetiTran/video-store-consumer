import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer.js';
import './CustomerCollection.css';

class CustomerCollection extends Component {

  constructor() {
    super();
    this.state = {
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
        id={customer.id}
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


  customerSelection = (customerName, customerId) => {
    this.props.selectionBarComponentCallBack(customerName, customerId)
  }

  render () {


    return (
      <section>

      <table>
        <thead>
          <tr>
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
          </tr>
        </thead>
          <tbody>
            {this.renderCustomerList()}
          </tbody>
      </table>

      </section>
    )
  }
}

CustomerCollection.propTypes = {
selectionBarComponentCallBack: PropTypes.func.isRequired,
}

export default CustomerCollection;
