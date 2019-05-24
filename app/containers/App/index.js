/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from 'containers/About/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { NavBar } from '../../components/NavBar';
import { ProtectedRoute } from '../../components/Protected-Route';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </React.Fragment>
  );
}
