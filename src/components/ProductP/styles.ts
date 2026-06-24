import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  border: none;
  padding: 8px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > img {
    width: 300px;
    height: 170px;
    object-fit: cover;
  }
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
  margin-top: auto;
`
