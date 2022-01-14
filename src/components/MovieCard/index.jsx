import { Component } from 'react';
import './styles.css';

export class MovieCard extends Component {
  render() {
    const { poster_path, imdbRating, title, overview } = this.props;
    const imgPath = 'https://image.tmdb.org/t/p/original' + poster_path;

    return (
      <div className="movie-card">
        <div className="movie-img">
          <img src={imgPath} alt={title} />
        </div>
        <div className="movie-content">
          <div className="movie-header">
            <div className="movie-title">
              <h2>{title}</h2>
              <h3>{imdbRating.toFixed(1)}</h3>
            </div>
          </div>
          <p className="movie-descr">{overview}</p>
        </div>
      </div>
    );
  }
}
