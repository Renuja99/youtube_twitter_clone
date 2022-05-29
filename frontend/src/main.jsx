import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



//Show the created component in the client

const container = document.querySelector('#root')

ReactDOM.createRoot(container).render(
  <App/>
)
