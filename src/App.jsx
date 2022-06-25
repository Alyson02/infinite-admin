import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { GlobalStyle } from "./components/GlobalStyle";
import Login from "./components/Login";
import Cabecalho from "./components/Cabecalho";
import { Container } from "./components/Ui";
import styled from "styled-components";
import Contadores from "./components/Dashboard/Contadores";
import Charts from "./components/Dashboard/Charts";
import TabelaProduto from "./components/Produtos/Tabela/TabelaProduto";
import FormProduto from "./components/AddProduto";
import { AddProdutoProvider } from "./context/AddProdutoProvider";

const ContainerFull = styled(Container)`
  min-width: 100vw;
`;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <GlobalStyle />
            <Login />
          </Route>
          <Route path="/home">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Contadores />
                <Charts />
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/produtos">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <TabelaProduto />
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/addProduto">
            <ProtectedLayout>
              <AddProdutoProvider>
                <GlobalStyle />
                <ContainerFull>
                  <Cabecalho></Cabecalho>
                  <FormProduto />
                </ContainerFull>
              </AddProdutoProvider>
            </ProtectedLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
