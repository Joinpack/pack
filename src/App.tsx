import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import Home from './Home';
import About from './About';

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}

export default App;
