import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.jsx';

class App extends React.Component {
  constructor() {
    super();
    // state = {
    //   count: 0,
    //
    // }
    //
  }

  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>

    </div>)
  }
}

export default App;
