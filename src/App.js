import React, { useState, Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import "./sass/main.scss";

import Notifications from './components/notifications/Notifications';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import Messages from './components/messages/Messages';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';

function App() {
  const [showNavBar, setShowNavBar] = useState(true);

  return (
    <Fragment>
      <Header navBar={{ showNavBar, setShowNavBar }} />
      <NavBar showNavBar={showNavBar} />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/notifications' component={Notifications} />
        <Route path='/messages' component={Messages} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
      </Switch>

    </Fragment>
  );
}

export default App;
