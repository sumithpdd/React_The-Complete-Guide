import React from 'react'
import NavigationItem  from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
export default function NavigationItems (){
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                Burger Bulder
            </NavigationItem>
            <NavigationItem>
                Checkout
            </NavigationItem>
        </ul>
    )
}
