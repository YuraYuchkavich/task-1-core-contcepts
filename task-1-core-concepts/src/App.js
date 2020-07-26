import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'
import PureComponentClass from './components/PureComponentClass'
import PureComponentFunction from './components/PureComponentFunctional'
import CreateElementComponent from './components/ElementComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClassComponent/>
        <FunctionComponent/>
        <PureComponentClass/>
        <PureComponentFunction/>
        <CreateElementComponent/>
      </header>
    </div>
  );
}

export default App;
