import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { Root } from './components/Root/Root.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  </React.StrictMode>,
)
