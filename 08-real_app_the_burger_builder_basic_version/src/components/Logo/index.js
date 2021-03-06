import React from 'react';

import classes from './styles.module.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
);

export default Logo;