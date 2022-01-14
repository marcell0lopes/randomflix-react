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
