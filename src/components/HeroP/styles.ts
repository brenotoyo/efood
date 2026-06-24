import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
  position: relative;

  .container {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 32px 0 32px 0;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
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
