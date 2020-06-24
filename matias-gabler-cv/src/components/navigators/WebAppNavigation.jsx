import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typist from 'react-typist';
import WebAppNavBar from './NavBar/NavBar';
import { MAIN_SCREEN, CONTACT_INFO } from './routes';
import './WebAppNavigation.css';

function WebAppNavigation() {
  return (
    <Router>
      <WebAppNavBar />
      <Container className="appContainer">
        <Switch>
          <Route path={CONTACT_INFO.path}>
            <Typist
              key={CONTACT_INFO.code}
              cursor={{
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
            >
              {CONTACT_INFO.code}
            </Typist>
          </Route>
          <Route path={MAIN_SCREEN.path}>
            <Typist
              key={MAIN_SCREEN.code}
              cursor={{
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 0,
              }}
            >
              {MAIN_SCREEN.code}
            </Typist>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default WebAppNavigation;
