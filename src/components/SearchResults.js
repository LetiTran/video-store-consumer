import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from './Movie';

class SearchResults extends Component {

  constructor(props) {
    super(props);

    this.state = { movies: [] }
  }

  componentDidMount() {
    const search = this.props.query

        console.log(this.props.query);

    axios.get('http://localhost:3000/movies?query=' + search)
    .then((response) => {
      this.setState({ movies: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderMovieList = () => {
    const componentList = this.state.movies.map((movie,index) => {
      return (
        <Movie
          key={index}
          title={movie.title}
          overview={movie.overview}
          release={movie.release_date}
          inventory={movie.inventory}
          image={movie.image_url}
        />
      );
    });

    return componentList
  }

  render () {
    let errorMessage

    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>
    }

    let message

    if (this.state.message) {
      message = <p>{this.state.message}</p>
    }


    return (
      <section>
        {errorMessage}
        {message}
        {this.renderMovieList()}
      </section>
    )
  }
}

export default SearchResults;

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
}
