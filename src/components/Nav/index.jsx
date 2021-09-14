import React from 'react'
import * as Style from './styles'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Style.Container>
      <Link to="/">
        <div>Formulario Usuario</div>
      </Link>
      <Link to="/about">
        <div>
          <div>Dados do Usuario</div>
        </div>
      </Link>
    </Style.Container>
  )
}

export default Nav
