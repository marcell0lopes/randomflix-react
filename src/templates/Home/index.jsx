import { Component } from 'react';

import './styles.css';

import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';

class App extends Component {
  render() {
    return (
      <section className="App">
        <div className="container">
          <header>
            <h1 className="logo">
              <span>random</span>FLIX
            </h1>
            <Button />
          </header>
          <main>
            <MovieCard />
          </main>
        </div>
      </section>
    );
  }
}

export default App;
