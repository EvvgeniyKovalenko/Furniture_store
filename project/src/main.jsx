import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/reduxStore.js'


const root = ReactDOM.createRoot(document.getElementById('root'))

debugger
let renderEntireTree = ()=>{
  root.render(
  <React.StrictMode>
    <App store={store.getState().main}/>
  </React.StrictMode>


  )
}

renderEntireTree()

store.subscribe(()=>{
  renderEntireTree()
})

