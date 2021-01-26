import React from 'react'
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
export default function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
               <NavigationItems/>
            </nav>
        </header>
    )
}
