import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  border: none;
  padding: 8px;
  margin-top: 40px;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  color: ${cores.begeClaro};
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.begeClaro};
`

export const TagWrapper = styled.div`
  margin-top: 8px;
`
