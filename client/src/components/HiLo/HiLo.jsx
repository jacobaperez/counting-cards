import React from 'react'
import './HiLo.css';

class HiLo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      cardsRemaining: 0
    }
  }

  render () {
    return (
      <div>
        <h1>HI LO CARD COUNTING SYSTEM</h1>
        <div>
          <h2>Card Element goes here.</h2>
        </div>
        <div className="action-buttons">
          <button type="button" className="btn btn-primary">Draw Card</button>
          <button type="button" className="btn btn-primary">Shuffle Deck</button>
          <button type="button" class="btn btn-primary">Running Count</button>
          <button type="button" class="btn btn-primary">True Count</button>
        </div>
        <div>
          <button type="button" class="btn btn-primary">Home</button>
        </div>

      </div>
    )
  }
}

export default HiLo;
