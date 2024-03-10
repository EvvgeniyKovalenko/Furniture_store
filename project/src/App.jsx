import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css'

function App(props) {
debugger

  return (
    <div className='app_wrapper'>
    <Header store={props.store}/>
    <Main store={props.store}/>

     
    </div>
  )
}

export default App
