import React from 'react';
import classes from './Logo.module.css'
import Burgericon from '../../assets/img/original.png'


const Logo = (props) => (
    <div className={classes.Logo} >
        <img src={Burgericon} alt="MyBGicon"/>
    </div>
)

export default Logo