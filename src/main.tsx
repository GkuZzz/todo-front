import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Auth from './components/screens/auth/auth-form'
import Reg from './components/screens/registration/reg-form'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="main__container">
      <h1 className="title">My TODOs</h1>
      <Reg/>
    </div>
  </React.StrictMode>,
)
