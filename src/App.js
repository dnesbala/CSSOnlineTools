import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CardMenus from './CardMenus';
import TextShadow from './TextShadow';
import BoxShadow from './BoxShadow';
import CSSTransform from './CSSTransform';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={CardMenus} />
        <Route exact path="/text-shadow-gen" component={TextShadow} />
        <Route exact path="/box-shadow-gen" component={BoxShadow} />
        <Route exact path="/css-transform-gen" component={CSSTransform} />
      </Switch>
    </div>
  );
}

export default App;
