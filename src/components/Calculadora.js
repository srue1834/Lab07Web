/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'
import './Calculadora.css'

const Calculadora = ({ value, onClick }) => (
  <div className="fondo">
    {value}
    <div className="pantalla">{value}</div>
    <button className="boton" type="button" onClick={onClick}>C</button>
    <button className="boton" type="button" onClick={onClick}>7</button>
  </div>

)

Calculadora.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Calculadora
