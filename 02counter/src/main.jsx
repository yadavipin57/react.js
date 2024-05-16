import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// createRoot creates DOM like structure just like bbrowser behind the scene. SO that it can compare the main DOM and this DOM. And update only those things which is updated in UI.