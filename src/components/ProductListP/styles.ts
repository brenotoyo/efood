import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Container = styled.div`
  padding: 24px 0 120px 0;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
`

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  &.visivel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  padding: 24px;
  max-width: 1024px;
  width: 100%;
  position: relative;
  z-index: 1;

  > img {
    width: 16px;
    height: 16px;
    weight: bold;
    position: absolute;
    right: 8px;
    top: 8px;
  }
`

export const ModalInfos = styled.div`
  display: flex;
  gap: 24px;

  h2,
  p {
    color: ${cores.begeClaro};
    margin-bottom: 16px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const Textos = styled.div`
  display: flex;
  flex-direction: column;

  ${TagContainer} {
    margin-top: auto;
    max-width: 220px;
    width: 100%;
  }
`
