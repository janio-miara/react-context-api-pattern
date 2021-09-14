import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 112px);
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: #d5d5d5;
  align-items: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #ffffff;
    width: 500px;
    align-items: center;
    padding: 16px;
    font-size: 20px;

    div {
      margin-top: 16px;
    }
  }
`
