import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

import classes from './SideDrawer.css';

const sideDrawer = props => {
  let attachedClass = [classes.SideDrawer, classes.Close];
  if (props.open) attachedClass = [classes.SideDrawer, classes.Open]
  return (
    <Aux>
      <Backdrop show={props.open} close={props.closed}/>
      <div className={attachedClass.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
