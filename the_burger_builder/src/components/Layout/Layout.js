import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
const layout = (props) => (
    <Auxillary>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;