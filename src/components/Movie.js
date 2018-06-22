import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

handleInputChange = () => {
  let image = this.props.image.split('/').pop()

  const movieInfo = {
    title: this.props.title,
    id: this.props.id,
    overview: this.props.overview,
    release_date: this.props.release_date,
    image_url: `/${image}`,
    external_id: this.props.external_id,
  }

  this.props.selectMovieCallBack(movieInfo)
}

  render () {
    let inventory

    if (this.props.inventory != null) {
      inventory = <p>Inventory count = {this.props.inventory}</p>
    }

    return (
      <article className="movie">
        <h3>{this.props.title}</h3>
        <div className="clearfix">
          <img className="movie__image" src= {this.props.image} alt={this.props.title} />
          <p className="movie__overview">{this.props.overview}</p>
        </div>
        <p>Release Date: {this.props.release_date}</p>
        {inventory}

        <input className="movie__select" name="name" type="button" value="Select" onClick={this.handleInputChange}></input>
      </article>
    )
  }
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  overview:PropTypes.string.isRequired,
  release_date:PropTypes.string,
  inventory: PropTypes.number,
  buttonName: PropTypes.string,
  selectMovieCallBack: PropTypes.func.isRequired,
  external_id: PropTypes.number
}
