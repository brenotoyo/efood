import styled from 'styled-components'
import { cores } from '../../styles'

type TagProps = {
  fullWidth?: boolean
  hasLink?: boolean
}

export const TagContainer = styled.div<TagProps>`
  background-color: ${({ fullWidth }) =>
    fullWidth ? cores.bege : cores.vermelho};
  color: ${({ fullWidth }) => (fullWidth ? cores.vermelho : cores.bege)};
  font-size: 12px;
  padding: 4px 6px;
  display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline-block')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  margin: ${({ fullWidth }) => (fullWidth ? '8px' : '0')};
  box-sizing: border-box;
  text-align: ${({ fullWidth }) => (fullWidth ? 'center' : 'left')};
  cursor: ${({ fullWidth, hasLink }) =>
    fullWidth || hasLink ? 'pointer' : 'default'};
  text-decoration: none;
`
