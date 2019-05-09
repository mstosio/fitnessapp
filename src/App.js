import React from 'react';
import Navbar from './components/layout/elements/Navbar';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/layout/styled/GlobalStyle';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header" />
          <Navbar />
        </div>
        <GlobalStyle />
      </BrowserRouter>
  );
}

export default App;
