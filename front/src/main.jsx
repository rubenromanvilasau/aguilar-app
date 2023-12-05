import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { AguilarApp } from './AguilarApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AguilarApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
