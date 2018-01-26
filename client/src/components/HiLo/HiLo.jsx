import React from 'react'
import './HiLo.css';
import {Link} from 'react-router-dom';
import playButton from './play-button.svg';
import {TweenMax} from 'gsap';
import Card from './Card.jsx';
import axios from 'axios';

class HiLo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cardsRemaining: 0,
      start: false,
      card: null,
      showRunningCount: false,
      showTrueCount: false
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
    // this.setState({
    //   count change
    //   cardsRemaining change
    // })

    // axios({
    //   method: 'get',
    //   url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    // })
    console.log('Draw a card!');
  }

  handleShuffleDeck() {
    // this.setState({
    //   count change
    //   cardsRemaining change
    // })

    //axios({
  //     shuffle the deck and reshow count and stuff
  // })
    console.log('Shuffle deck was clicked!');
  }

  showTrueCount() {
    this.setState({
      showTrueCount: !this.state.showTrueCount
    })
  }

  showRunningCount() {
    this.setState({
      showRunningCount: !this.state.showRunningCount
    })
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
          <Card card={this.state.card}/>
          <img id="get-started" src={playButton}/>
      </div>
      <div className="action-buttons">
        {
          !this.state.start ? <button type="button" className="btn btn-primary" onClick={this.handleStart.bind(this)}>Start</button>
        : <button type="button" className="btn btn-primary" onClick={this.handleDraw.bind(this)}>Draw</button>
        }
        <button type="button" className="btn btn-primary" onClick={this.handleShuffleDeck.bind(this)}>Shuffle Deck</button>
        <button type="button" className="btn btn-primary" onClick={this.showRunningCount.bind(this)}>Running Count</button>
        <button type="button" className="btn btn-primary" onClick={this.showTrueCount.bind(this)}>True Count</button>
      </div>
      <div className="return-home">
        <Link to="/">
          <button type="button" className="btn btn-info">Home</button>
        </Link>
      </div>
      <div className="card-counts">
        {
          this.state.showRunningCount ?
          <div className="w3-container w3-center w3-animate-zoom">
            <h2>Running Count: {this.state.count}</h2>
            </div>
          : <div></div>
        }
        {
          this.state.showTrueCount ?
          <div className="w3-container w3-center w3-animate-zoom">
            <h2>True Count: {this.state.cardsRemaining}</h2>
          </div> : <div></div>
        }
      </div>
    </div>)
  }
}

export default HiLo;
