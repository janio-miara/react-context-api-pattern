import React from 'react'
import { useRegister } from '../../context/RegisterContext'
import * as Style from './styles'

const About = () => {
  const { inputValue } = useRegister()
  const { fastName, lastName, email, age } = inputValue
  return (
    <Style.Container>
      <div className={'wrapper '}>
        <div>{fastName}</div>
        <div>{lastName}</div>
        <div>{email}</div>
        <div>{age}</div>
      </div>
    </Style.Container>
  )
}

export default About
