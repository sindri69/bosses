import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home';
import Bosses from './Components/Bosses/Bosses';

import { ThemeProvider } from './context/ThemeContext';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        theme: {
            current: 'dark',
            toggleTheme: () => {
                this.setState({
                    theme: { ...this.state.theme, current: this.state.theme.current === 'dark' ? 'light' : 'dark' }
                });
            }
        }
    };
}



  render() {
    return ( 
      <ThemeProvider value={ this.state.theme }>
  
     
      <NavigationBar/>
        <div className="container">
              <Switch>
                  <Route exact path ="/" component={ Home } />
                  <Route exact path ="/bosses" component={ Bosses } />
                  <Route path="*" render={() => <div>404 Not found</div>} />
              </Switch>
        </div>
    
      </ThemeProvider> 
      
    );
  }
}

export default App;
