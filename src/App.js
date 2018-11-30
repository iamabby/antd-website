import React, { Component } from 'react';
import './App.css';
import Head from './component/Head/Head';
import Nav from './component/Nav/Nav';
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import Login from './component/Login/Login';


class App extends Component {
  constructor(){
    super();
    this.state={
      userName:""
    }
  }
  componentDidMount(){
   
  }
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/" render={ props=>(
               <div className="App">
                <Head />
                <Nav />
               </div>
            )}/>
          </Switch>
       
      </Router>
    );
  }
}

export default App;
