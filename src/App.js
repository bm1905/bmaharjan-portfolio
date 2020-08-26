import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import MyPortfolio from './components/my-portfolio/MyPortfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={MyPortfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;
