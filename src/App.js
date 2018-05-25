import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import Welcome from "./Component/Welcome/Welcome";
import RootReducer from "./DataStore/RootReducer";

export const dataStore = createStore(RootReducer,applyMiddleware(logger))

class App extends Component {

  render() {
      return (
          <Provider store={dataStore}>
              <div className="App">
                  <header className="App-header">
                      <h1 className="App-title">Broccoli & Co.</h1>
                  </header>
                  <Welcome/>
                  <footer className="App-footer">
                      Copyright © 2018 Broccoli & Co. Pty Ltd
                  </footer>
              </div>
          </Provider>
    )
  }
}

export default App
