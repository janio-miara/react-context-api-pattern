import React, { useState } from 'react'
import * as Style from './styles'

const Input = ({ onChange, value, id, placeholder, name, props }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Style.ContainerInput onBlur={() => active && setActive(false)} onClick={() => setActive(true)}>
        <span className="wrapper-label">{(active || value) && name}</span>
        <Style.WrapperInput
          {...props}
          id={id}
          placeholder={!active ? placeholder : ''}
          value={value}
          onChange={e => onChange(e.target)}
        />
      </Style.ContainerInput>
    </>
  )
}

export default Input
