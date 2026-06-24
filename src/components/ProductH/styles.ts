import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled(Link)`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  color: ${cores.vermelho};
  position: relative;
  margin-top: 48px;
  text-decoration: none;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Destaque = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 0 8px;
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 0 8px;
`

export const TagWrapper = styled.div`
  margin: 16px 0 8px 8px;
`
