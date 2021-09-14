import React, { createContext, useContext, useState } from 'react'

const RegisterContext = createContext(null)

const initialState = {
  fastName: '',
  lastName: '',
  email: '',
  age: '',
}

const RegisterProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(initialState)

  const handleValues = target => {
    const { id, value } = target
    setInputValue({ ...inputValue, [id]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Cadastro realizado com sucesso!')
  }

  return (
    <RegisterContext.Provider value={{ inputValue, handleValues, handleSubmit }}>{children}</RegisterContext.Provider>
  )
}

const useRegister = () => {
  return useContext(RegisterContext)
}

export { RegisterProvider, useRegister }
