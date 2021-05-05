/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import './Calculadora.css'

const calc_buttons = ({ value, onClick }) => (
  <div className="fondo">
    <div className="pantalla">{value}</div>
    <div className="container">
      <button className="boton" type="button" onClick={onClick}>7</button>
      <button className="boton" type="button" onClick={onClick}>8</button>
      <button className="boton" type="button" onClick={onClick}>9</button>
      <button className="boton" type="button" onClick={onClick}>÷</button>
      <button className="boton" type="button" onClick={onClick}>4</button>
      <button className="boton" type="button" onClick={onClick}>5</button>
      <button className="boton" type="button" onClick={onClick}>6</button>
      <button className="boton" type="button" onClick={onClick}>x</button>
      <button className="boton" type="button" onClick={onClick}>1</button>
      <button className="boton" type="button" onClick={onClick}>2</button>
      <button className="boton" type="button" onClick={onClick}>3</button>
      <button className="boton" type="button" onClick={onClick}>+</button>
      <button className="boton" type="button" onClick={onClick}>+/-</button>
      <button className="boton" type="button" onClick={onClick}>0</button>
      <button className="boton" type="button" onClick={onClick}>.</button>
      <button className="boton" type="button" onClick={onClick}>=</button>
    </div>
  </div>
)

calc_buttons.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default calc_buttons
