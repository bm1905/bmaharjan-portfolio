import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import MyPortfolio from './components/my-portfolio/MyPortfolio';
import NotFoundPage from './components/404page/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={MyPortfolio} />
        <Switch>
          <Route path='/*' component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
