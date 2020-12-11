import React from 'react';
import Login from './components/Login.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="web-main">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
