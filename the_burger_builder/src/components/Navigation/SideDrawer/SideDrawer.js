import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
export default function SideDrawer(props) {
    return (
        <div className={classes.SideDrawer}>
           <Logo height="11%"/>
           <nav>
               <NavigationItems></NavigationItems>
           </nav>

        </div>
    )
}
