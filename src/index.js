/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './components/Calculadora'

const App = () => (
  <div>
    <Calculadora />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
