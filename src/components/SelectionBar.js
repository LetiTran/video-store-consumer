import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SelectedCustomer from './SelectedCustomer.js'
import SelectedMovie from './SelectedMovie.js'
import './SelectionBar.css'

class SelectionBar extends Component {

  rentMovie = () => {
    const customerId = this.props.customerId
    const title = this.props.movieName

    // Create dueDate to be today + 7 days:
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const dueDate = today.getFullYear()+'-'+ (today.getMonth()+1) +'-'+today.getDate();

    // Make POST request to our API
    axios.post('http://localhost:3000/rentals/check-out', {"customer_id": customerId, "due_date": dueDate, "title": title})
    .then((response) => {
      this.setState({ movies: response.data });
      // open modal for confirmation:
      this.props.toggleCheckoutModalCallBack()
      // clear App state:
      this.props.clearStateCallBack();
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  render () {
    return (
      <div className="selection-bar">
        <SelectedCustomer
        customerName={this.props.customerName}/>

        <SelectedMovie
        movieName={this.props.movieName}/>

      <input className="checkout-button" disabled={(this.props.customerId === 0)|| (this.props.movieId === 0) } name="rental" type="button" value="Check out new rental" onClick={this.rentMovie}></input>
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
  clearStateCallBack: PropTypes.func.isRequired,
  toggleCheckoutModalCallBack: PropTypes.func.isRequired,
}
