import styled from 'styled-components'
import fundo from '../../assets/imagem de fundo.png'
import { cores } from '../../styles'

export const Container = styled.div`
  background-image: url('${fundo}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;

  .container {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 32px;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Titulo = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
`

export const Nome = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${cores.branco};
`
