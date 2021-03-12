import React from 'react';

import classes from './styles.module.css'; 

const Backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;