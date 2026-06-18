import styled from 'styled-components'
import fundo from '../../assets/hero.png'

export const Container = styled.div`
  background-image: url('${fundo}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 178px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    height: 178px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
