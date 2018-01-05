import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Container from './Container';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const Home=()=>{
  return (
      <div>
       <Container/>
        
      </div>
  )
};

const Login1=()=>{
 return (
     <div>
     <Login/>
     
    
     </div>
 )
};

class App extends Component {
 render() {
   return (
     <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login1}/>
    
          
        </div>
      </Router>
     
   );
 }
}


export default App;
