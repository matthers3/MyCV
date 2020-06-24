import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import NavBarRoutes from './NavBarRoutes';
import './NavBar.css';

function WebAppNavBar(props) {
  return (
    <div>
      <AppBar color="white">
        <Container>
          <NavBarRoutes />
        </Container>
      </AppBar>
    </div>
  );
}

export default WebAppNavBar;
