import React from 'react'
import './HiLo.css';
import {Link} from 'react-router-dom';
import playButton from './play-button.svg';
import {TweenMax} from 'gsap';

class HiLo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cardsRemaining: 0,
      start: false,
    }
  }

  handleStart() {
    this.setState({
      start: !this.state.start
    })
    console.log(this.state.start);
    if (!this.state.start) {
      TweenMax.to('#get-started', 2, { x: 100, rotation: 200, opacity: 0});
    }
  }

  handleDraw() {
    console.log('Draw a card!');
  }

  render() {
    return (<div>
      <div id="rules">
        <h3>Card counting Point Evaluation</h3>
        <p>Ace, King, Queen, Jack, 10: +1</p>
        <p>7, 8, 9: +0</p>
        <p>2, 3, 4, 5, 6: -1</p>
      </div>
      <div className="card">
        <h2>Card Element goes here.</h2>
        <img id="get-started" src={playButton}/>
      </div>
      <div className="action-buttons">
        {
          !this.state.start ? <button type="button" className="btn btn-primary" onClick={this.handleStart.bind(this)}>Start</button>
        : <button type="button" className="btn btn-primary" onClick={this.handleDraw.bind(this)}>Draw</button>

        }

        <button type="button" className="btn btn-primary">Shuffle Deck</button>
        <button type="button" className="btn btn-primary">Running Count</button>
        <button type="button" className="btn btn-primary">True Count</button>
      </div>
      <div className="return-home">
        <Link to="/">
          <button type="button" className="btn btn-info">Home</button>
        </Link>
      </div>

    </div>)
  }
}

export default HiLo;
