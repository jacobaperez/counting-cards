import React from 'react'
import PropTypes from 'prop-types'

class LandingPage extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Counting Systems
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Hi-Lo</a>
            </li>
            <li className="disabled">
              <a href="#">K-O (Coming Soon)</a>
            </li>
            <li className="disabled">
              <a href="#">Hi-Opt I (Coming Soon)</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default LandingPage;
