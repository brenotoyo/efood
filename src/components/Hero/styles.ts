import styled from 'styled-components'
import fundo from '../../assets/hero.png'

export const HeroContainer = styled.div`
  background-image: url('${fundo}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 384px;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const Descricao = styled.p`
  margin-top: 156px;
  font-weight: 900;
  font-size: 36px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
`
