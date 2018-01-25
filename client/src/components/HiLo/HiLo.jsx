
import React from 'react'
import './HiLo.css';
import { Link } from 'react-router-dom';
import playButton from './play-button.svg';
import shuffle from './shuffle.svg';
import {TweenMax} from 'gsap';

class HiLo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cardsRemaining: 0,
      shuffle: false
    }
  }

  testClick() {
    // let s = document.createElement('IMG');
    // s.setAttribute('src', './shuffle.svg');
    // TweenMax.from(s, 2, {opacity: 0, rotation:180, immediateRender:false});
  }

  handleShuffleClick() {
    // TweenMax.toFrom('#get-started', 2, { rotation: 360, opacity: 0});
  }

  handleHomeClick() {
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <h1>HI LO CARD COUNTING SYSTEM</h1>
        <div id="rules">
          <h3>Card counting Point Evaluation</h3>
          <ul>
            <li>Ace, King, Queen, Jack, 10: +1</li>
            <li>7, 8, 9: +0</li>
            <li>2, 3, 4, 5, 6: -1</li>
          </ul>
        </div>
        <div className="card">
          <h2>Card Element goes here.</h2>
          {

              <img id="get-started" src={playButton} />

          }
        </div>
        <div className="action-buttons">
          <button type="button" className="btn btn-primary" onClick={this.testClick.bind(this)}>Draw Card</button>
          <button type="button" className="btn btn-primary" onClick={this.handleShuffleClick.bind(this)}>Shuffle Deck</button>
          <button type="button" className="btn btn-primary">Running Count</button>
          <button type="button" className="btn btn-primary">True Count</button>
        </div>
        <div className="return-home">
          <Link to="/">
            <button type="button" className="btn btn-info">Home</button>
          </Link>
        </div>

      </div>
    )
  }
}

export default HiLo;
