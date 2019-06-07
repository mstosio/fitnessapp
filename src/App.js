import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/layout/styled/GlobalStyle';
import Home from './components/dashboard/Home';
import Calculator from './components/Calc/Calculator';
import Food from './components/Food/Food';
import DishInformations from './components/Food/DishInformations';

class App extends React.Component {
  
  render(){
        return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/calculator" component={Calculator}></Route>
                <Route exact path="/food" component={Food}></Route>
                <Route exact path="/food/:id" component={DishInformations}></Route>
              </Switch>
            </div>
            <GlobalStyle />
          </BrowserRouter>
      );
    }
  }
  

export default App;
