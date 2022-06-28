// eslint-disable-next-line
import react from "react"; 
import { useAuth } from "../../context/AuthProvider/useAuth";
import React from "react";
import { Typography } from "@material-ui/core";
import close from "../../assets/images/close.png";
import { GlobalStyle } from "../GlobalStyle";
import { Botao, Container } from "../Ui";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Imagem = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 800px) {
    width: 50vw;
    height: 20vh;
  }

  @media (max-width: 600px) {
    width: 60vw;
    height: 30vh;
  }
`;

const ContainerError = styled(Container)`
  height: 100vh;
`;

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();
  const history = useHistory();

  if (!auth.token || auth.role !== 'Master') {
    return (
      <ContainerError>
        <GlobalStyle />
        <Typography variant="h3">Você não tem permissão!</Typography>
        <Imagem src={close}></Imagem>
        <Botao onClick={() => history.push('/')}>Voltar ao login</Botao>
      </ContainerError>
    );
  }

  return children;
};
