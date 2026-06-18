import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-color: ${cores.bege};
  font-size: 14px;
  color: ${cores.vermelho};
  height: 298px;
  width: 100%;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }
`
export const Redes = styled.div`
  display: flex;
  margin: 32px 0 64px 0;

  img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 10px;
  weight: 400;
`
