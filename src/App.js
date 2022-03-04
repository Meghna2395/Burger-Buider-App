import React, {Component} from 'react';
import './App.css';
import Hoc from './hoc/hoc'
import Layout from './component/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){
  return (
    <Hoc>
      <Layout>
        <BurgerBuilder/>
        </Layout>
   
    </Hoc>
  );
}}

export default App;
