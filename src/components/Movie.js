import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {


  render () {
    const imageURLBase = 'https://image.tmdb.org/t/p/w1280'

    return (
      <article>
        <h3>{this.props.title}</h3>
        { this.props.image &&
          <img src={imageURLBase + this.props.image} alt={this.props.title} />
        }
        <p>{this.props.overview}</p>
        <p>{this.props.release_date}</p>
        <p>{this.props.inventory}</p>
      </article>
    )
  }
}

export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  image:PropTypes.string,
  overview:PropTypes.string,
  release_date:PropTypes.string,
  inventory: PropTypes.number
}
