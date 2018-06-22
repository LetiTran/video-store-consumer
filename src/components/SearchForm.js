import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css'

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  valid = () => {
    return this.state.query.length > 0
  }

  clearForm = () => {
    this.setState({
      query: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.valid ()) {

      this.props.searchQueryCallback(this.state.query);

      this.clearForm();
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="sumbit-form">
          <input className="sumbit-form__text-field" name="query" value={this.state.query}
          onChange={this.onFieldChange} type="text"
          />

        <input className="sumbit-form__sumbit" type="submit" value="Search" />
        </div>
      </form>
    )
  }
}

export default SearchForm;

SearchForm.propTypes = {
  searchQueryCallback: PropTypes.func.isRequired,
};
