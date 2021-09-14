import React from 'react'
import * as Style from './styles'
import Input from '../Input'
import { useRegister } from '../../context/RegisterContext'

const FormUser = () => {
  const { inputValue, handleValues, handleSubmit } = useRegister()
  const { fastName, lastName, email, age } = inputValue

  return (
    <Style.Container>
      <form onSubmit={handleSubmit}>
        <div>Formulario</div>
        <Input
          value={fastName}
          onChange={handleValues}
          id="fastName"
          name="Primeiro Nome"
          placeholder="Primeiro nome"
        />
        <Input value={lastName} onChange={handleValues} id="lastName" name="Sobrenome" placeholder="Sobrenome" />
        <Input value={age} type="number" onChange={handleValues} id="age" name="Idade" placeholder="Idade" />
        <Input
          value={email}
          type="email"
          onChange={handleValues}
          id="email"
          name="email"
          onClear
          placeholder="Primeiro nome"
        />
        <button>Cadastrar</button>
      </form>
    </Style.Container>
  )
}

export default FormUser
