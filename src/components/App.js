import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Layout from './Layout';
import NotFound from './NotFound/NotFound';
import Home from '../pages/Home';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
