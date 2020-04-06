import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Route } from "react-router-dom";

// import API
import States from "./components/States"
import State from "./components/State"
import StateMap from './components/StateMap'
import MapKey from "./components/MapKey"



class App extends React.Component {
  state = {
  }


  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <NavBar />
            <div className="container">
              <Route path="/" exact component={MapKey}/>
              <Route path="/" exact component={StateMap} />
              <Route path="/" exact component={States} />
              <Route path="/state/:id" component={State}/>
            </div>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;