import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <article>
        <h3>{this.props.title}</h3>
        { this.props.image &&
          <img src= {this.props.image} alt={this.props.title} />
        }
        <p>{this.props.overview}</p>
        <p>{this.props.release_date}</p>
        <p>{this.props.inventory}</p>

        <input name="name" type="button" value="Select" onClick={this.handleInputChange}></input>
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
