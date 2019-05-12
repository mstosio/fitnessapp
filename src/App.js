import React from 'react';
import Navbar from './components/layout/elements/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './components/layout/styled/GlobalStyle';
import Home from './components/dashboard/Home';
import Calculator from './components/Calc/Calculator';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/calculator" component={Calculator}></Route>
          </Switch>
        </div>
        <GlobalStyle />
      </BrowserRouter>
  );
}

export default App;
