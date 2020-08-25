import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </Router>
  );
}
