import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/reduxStore.js'
import { Provider } from 'react-redux'





const root = ReactDOM.createRoot(document.getElementById('root'))

debugger
let renderEntireTree = ()=>{
  root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App store={store}/>
    </Provider>
  
  </React.StrictMode>


  )
}

renderEntireTree()

store.subscribe(()=>{
  renderEntireTree()
})

