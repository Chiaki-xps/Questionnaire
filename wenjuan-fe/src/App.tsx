// markRead
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/reset.css'
import './App.css'

import ReduxDemo from './ReduxDemo'

function App() {
  // return <RouterProvider router={routerConfig}></RouterProvider>

  return <ReduxDemo />
}

export default App
