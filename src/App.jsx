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
import Detalhe from "./components/DeatlheProduto";
import Pagina404 from "./components/Pagina404/";
import { DetalheProdutoProvider } from "./context/DetalheProdutoProvider";
import FormUpdateProduto from "./components/AlterProduto";
import Pedidos from "./components/Pedido/Pedidos";
import Pedido from "./components/Pedido";
import Compras from "./components/Venda";
import Funcionarios from "./components/Funcionario";
import FuncionarioForm from "./components/Funcionario/adicionar";
import DetalheFuncionario from "./components/Funcionario/detalhe";
import AtualizaFuncionario from "./components/Funcionario/alterar";
import Clientes from "./components/Cliente";
import DetalheCliente from "./components/Cliente/detalhe"
import Agendas from "./components/Agenda";
import DetalheAgenda from "./components/Agenda/detalhe"

const ContainerFull = styled(Container)`
  min-width: 100vw;
`;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
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
          <Route path="/produto/:id">
            <ProtectedLayout>
              <DetalheProdutoProvider>
                <GlobalStyle />
                <ContainerFull>
                  <Cabecalho></Cabecalho>
                  <Detalhe />
                </ContainerFull>
              </DetalheProdutoProvider>
            </ProtectedLayout>
          </Route>
          <Route path="/update-produto/:id">
            <ProtectedLayout>
              <AddProdutoProvider>
                <DetalheProdutoProvider>
                  <GlobalStyle />
                  <ContainerFull>
                    <Cabecalho></Cabecalho>
                    <FormUpdateProduto />
                  </ContainerFull>
                </DetalheProdutoProvider>
              </AddProdutoProvider>
            </ProtectedLayout>
          </Route>
          <Route path="/pedidos">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Pedidos />
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/pedido/:id">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Pedido/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/vendas">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Compras />
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/funcionarios">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Funcionarios/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/addFuncionario">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <FuncionarioForm/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/funcionario/:id">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <DetalheFuncionario/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/update-funcionario/:id">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <AtualizaFuncionario/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/clientes">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Clientes/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/cliente/:id">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <DetalheCliente/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/agendas">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <Agendas/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route path="/agenda/:id">
            <ProtectedLayout>
              <GlobalStyle />
              <ContainerFull>
                <Cabecalho></Cabecalho>
                <DetalheAgenda/>
              </ContainerFull>
            </ProtectedLayout>
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
