import React from 'react'
import styled from 'styled-components'
import imagem from '../../assets/images/close.png'
import { Container } from '../Ui'
import { corAviso } from '../Ui/variaveis';

const ContainerFull = styled(Container)`
    height: 100vh;
    width: 100vw;
`;

const MensagemErro = styled.p`
    color: ${corAviso};
    font-size: 30px;
`;

const Pagina404 = () => { 
  return (
    <ContainerFull>
      <img src={imagem} alt="imagem erro" width={200} height={200}/>
      <MensagemErro>
        Ops, Essa página não existe!
      </MensagemErro>
    </ContainerFull>
  )
}

export default Pagina404