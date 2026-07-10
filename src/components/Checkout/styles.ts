import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CheckContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  h3 {
    font-size: 16px;
    color: ${cores.bege};
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${cores.bege};
    margin-top: 16px;
    line-height: 22px;

    &.margin-bot {
      margin-bottom: 24px;
    }
  }

  ${TagContainer} {
    font-size: 14px;
    font-weight: bold;

    &:hover {
      background-color: ${cores.begeClaro};
    }
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Dados = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 14px;
    color: ${cores.bege};
    margin: 8px 0 8px 0;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
    background-color: ${cores.bege};
    border: none;

    &.error {
      border: 3px solid red;
    }
  }
`

export const Group = styled.div`
  display: flex;
  gap: 34px;

  > div {
    flex: 1;
    min-width: 0;
  }
`

export const Buttons = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${TagContainer} {
    margin-top: 8px;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    padding: 4px;
  }
`
