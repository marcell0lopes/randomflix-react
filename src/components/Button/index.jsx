import { Component } from 'react';
import './styles.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Gerar filme Aleatório</button>;
  }
}
