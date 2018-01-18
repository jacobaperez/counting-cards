import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.jsx';
import HiLo from './HiLo/Hilo.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/hilo" component={HiLo} />
      </Switch>
    </div>)
  }
}

export default App;
