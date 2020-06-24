import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import {
  MAIN_SCREEN,
  CONTACT_INFO,
  GAME_DEVELOPMENT,
  WEB_EXPERIENCE,
  MOBILE_EXPERIENCE,
} from '../routes';
import './NavBar.css';

function NavBarRoutes() {
  const navTabs = [
    MAIN_SCREEN,
    WEB_EXPERIENCE,
    MOBILE_EXPERIENCE,
    GAME_DEVELOPMENT,
    CONTACT_INFO,
  ];

  const SingleTab = ({ code, path }) => (
    <Link to={path} className="TabLink">
      <Tab label={code} />
    </Link>
  );

  SingleTab.propTypes = {
    code: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  };

  return (
    <Tabs centered>
      {navTabs.map((route) => (
        <SingleTab
          code={route.code}
          path={route.path}
        />
      ))}
    </Tabs>
  );
}

export default NavBarRoutes;
