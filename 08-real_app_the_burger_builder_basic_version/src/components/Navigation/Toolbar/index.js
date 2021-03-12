import React from 'react';

import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Logo from '../../Logo';

import classes from './styles.module.css';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
        <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;