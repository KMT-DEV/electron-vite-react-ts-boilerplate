import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/tajawal/200.css'
import '@fontsource/tajawal/300.css'
import '@fontsource/tajawal/400.css'
import '@fontsource/tajawal/500.css'
import '@fontsource/tajawal/700.css'
import '@fontsource/tajawal/800.css'
import '@fontsource/tajawal/900.css'
import { store } from './rtk/store'
import { Provider } from 'react-redux'
import { HashRouter, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {process.env.NODE_ENV === 'production' ? (
      <HashRouter basename="/app">
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    ) : (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    )}
  </React.StrictMode>
)
