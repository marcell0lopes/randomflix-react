import { Component } from 'react';
import './styles.css';

export class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <div className="movie-img">
          <img
            src="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217"
            alt=""
          />
        </div>
        <div className="movie-content">
          <div className="movie-title">
            <h2>Movie Title</h2>
            <h3>8.2</h3>
          </div>

          <div className="movieSub">
            <small>Movie Original Title | Movie Genre</small>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            inventore, ad quidem quo odio, quam alias sapiente a recusandae,
            culpa quas. Molestias quae modi dicta, numquam esse necessitatibus
            ullam atque! Laudantium, minima. Dolorum vero distinctio,
            consequuntur reprehenderit deleniti debitis possimus nostrum nemo
            repellat maiores. In impedit ducimus, nemo dolor vitae, dignissimos,
            voluptatibus iusto unde maxime ea qui eius laborum quas.
          </p>
        </div>
      </div>
    );
  }
}
