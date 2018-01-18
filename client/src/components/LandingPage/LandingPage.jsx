import React from 'react'
import { Link } from 'react-router-dom';
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
              <Link to="/hilo">Hi-Lo </Link>
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
