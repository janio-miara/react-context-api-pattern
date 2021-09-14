import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .wrapper-label {
    position: absolute;
    color: #464646;
    font-size: 13px;
    left: 14px;
    top: -8px;
    background: white;
    padding: 0 2px;
    line-height: 16px;
    letter-spacing: 0;
    font-weight: normal;
  }
`

export const WrapperInput = styled.input`
  width: 100%;
  min-width: 65px;
  border-radius: 8px;
  background: white;
  border: 1px solid transparent;
  box-shadow: #bdbdbd 0 0 0 1.2px inset;
  color: #4f4f4f;
  padding: 14px;

  &:focus {
    outline: none;
    border-color: #27277c;
    box-shadow: 0 0 2px #27277c;
  }

  ::placeholder {
    color: #4f4f4f;
    font-weight: lighter;
  }
`
