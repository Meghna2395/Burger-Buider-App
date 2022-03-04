import React from 'react';
import classes from './SideDrawer.module.css'
import Hoc from '../../../hoc/hoc'
import Backdrop from '../../UI/Backdrop/Backdrop' 
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';




const SideDrawer = (props) => {
    let SideClasses = [classes.SideDrawer,classes.Close]
    if(props.open){
        SideClasses = [classes.SideDrawer,classes.Open]
    }

return (
    <Hoc>
        <Backdrop show={props.open}  clicked={props.closed} />

          <div className={SideClasses.join(' ')} >
          <div className={classes.Logo} >  <Logo/> </div> 
          <nav>
     
          <NavigationItems/>


          </nav>

 </div>
</Hoc>
)

}

export default SideDrawer