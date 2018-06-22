import React, { Component } from 'react';
import Movie from './Movie';
import axios from 'axios';
import PropTypes from 'prop-types';
import './LibraryCollection.css';

class LibraryCollection extends Component {

  constructor(props) {
    super(props);

    this.state = { movies: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies')
    .then((response) => {
      this.setState({ movies: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  selectMovie =(movieName, movieId) => {
  this.props.selectionBarComponentCallBack(movieName, movieId)
  }

  renderMovieList = () => {
    const componentList = this.state.movies.map((movie,index) => {
      return (
        <Movie
          key={index}
          selectMovieCallBack={this.selectMovie}
          buttonName="Select to rent"
          title={movie.title}
          overview={movie.overview}
          release_date={movie.release_date}
          inventory={movie.inventory}
          image={movie.image_url}
          external_id={movie.external_id}
          id={movie.id}
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

    return (
      <section className="library-collection">
        {errorMessage}
        {this.renderMovieList()}
      </section>
    )
  }
}

export default LibraryCollection;

LibraryCollection.propTypes = {
  selectionBarComponentCallBack: PropTypes.func,
}
