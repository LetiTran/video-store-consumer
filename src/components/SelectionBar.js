import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedCustomer from './SelectedCustomer.js'
import SelectedMovie from './SelectedMovie.js'
import axios from 'axios';

class SelectionBar extends Component {

  handleInputChange = () => {
    const customerId = this.props.customerId
    const title = this.props.movieName



  axios.post('http://localhost:3000/rentals/check-out', {"customer_id": customerId, "due_date": "2019-01-10", "title": title})
  .then((response) => {
    this.setState({ movies: response.data });
    console.log("Movie Rented!")
  })
  .catch((error) => {
    this.setState({
      error: error.message
    })
  });

}
  render () {
    return (
      <div>
      <SelectedCustomer
      customerName={this.props.customerName}
      customerId={this.props.customerId}/>
      <SelectedMovie
      movieName={this.props.movieName} movieId={this.props.movieId}/>
      <input name="rental" type="button" value="Check out new rental" onClick={this.handleInputChange}></input>
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
}
