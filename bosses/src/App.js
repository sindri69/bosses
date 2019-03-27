import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import Bosses from './Components/Bosses/Bosses';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar/>
        <div className="container">
              <Switch>
                  <Route exact path ="/" component={ Home } />
                  <Route exact path ="/bosses" component={ Bosses } />
                  <Route path="*" render={() => <div>404 Not found</div>} />
              </Switch>
        </div>
      </div>
    );
  }
}

export default App;
