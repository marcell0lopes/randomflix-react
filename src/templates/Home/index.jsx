import { Component } from 'react';

import './styles.css';

import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';

class App extends Component {
  state = {
    isMovieLoaded: false,
    movie: {},
  };

  // loadMovie sem imagem

  // loadMovie = () => {
  //   fetch('https://k2maan-moviehut.herokuapp.com/api/random')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.setState({
  //         movie: json,
  //         isMovieLoaded: true,
  //       });
  //     });
  //   console.log(this.state);
  // };

  // loadMovie via TMDB

  getRandomMovie = () => {
    const randomPage = Math.floor(Math.random() * 50 + 1);
    const randomMovieByPage = Math.floor(Math.random() * 19);

    // filme aleatorio entre 0 e 19;
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=720147a2279f9efc7ebd32c994413cfc&language=en-us&page=${randomPage}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          movie: json.results[randomMovieByPage],
          isMovieLoaded: true,
        });
      });
    console.log(this.state);
  };

  loadMovie = () => {
    this.getRandomMovie();
  };

  render() {
    const { vote_average, title, overview, original_title, poster_path } =
      this.state.movie;

    return (
      <section className="App">
        <div className="container">
          <header>
            <h1 className="logo">
              <span>random</span>FLIX
            </h1>
            <Button onClick={this.loadMovie} />
          </header>
          <main>
            {this.state.isMovieLoaded ? (
              <MovieCard
                imdbRating={vote_average}
                title={title}
                overview={overview}
                original_title={original_title}
                poster_path={poster_path}
              />
            ) : (
              <p className="no-movie">
                Clique no botão acima para receber a indicação de um filme
                aleatório
              </p>
            )}
          </main>
        </div>
      </section>
    );
  }
}

export default App;
