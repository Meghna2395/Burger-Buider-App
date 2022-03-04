import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import { MdViewHeadline } from "react-icons/md";


const Toolbar = (props) => (
    <header className={classes.Toolbar} >
        <div className={classes.DisplayL}  onClick={props.ToggleClicked} > <MdViewHeadline  size="2em" /> </div>
        <Logo/>
        
        <nav className={classes.Display} >
            <NavigationItems/>
        </nav>
 </header>
)

export default Toolbar