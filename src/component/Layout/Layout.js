import React from 'react'
import Hoc from '../../hoc/hoc'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'
import { Component } from 'react'
// import classses from './Layout.module.classses'

class  Layout extends Component{
  state = {
    showSideDrawer : false
  }

  SideDrawerClosedHandler = () => {
    this.setState({showSideDrawer : false})
  }

  SideDrawerToggleHandler= () => {
    this.setState( (prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    } ) }


  render(){
    return  <Hoc>
        {/* <div> ToolBar, SideDrawer , Backdrop </div> */}
        <Toolbar 
        ToggleClicked={this.SideDrawerToggleHandler} /> 
        < SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.SideDrawerClosedHandler}
        />
        <main  >
            {this.props.children}
        </main>

       </Hoc>
  }
}

export default Layout
