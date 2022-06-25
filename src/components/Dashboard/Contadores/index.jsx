import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Api } from "../../../services/api";
import { corContrasteClaro } from "../../Ui/variaveis";

const ContadoresContainer = styled.article`
  padding-right: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  margin-bottom: 2rem;
`;

const ContadorVisitantes = styled.section`
  display: block;
  width: 20%;
  padding: 24px 12px;
  background-color: #023e8a;
  border-radius: 10px;
`;

const ContadorVendas = styled(ContadorVisitantes)`
  background-color: #ff5883;
`;

const ContadorNovasContas = styled(ContadorVisitantes)`
  background-color: #fb8500;
`;

const ContadorPedidos = styled(ContadorVisitantes)`
  background-color: #1b4332;
`;

const ContadorTexto = styled.p`
  color: ${corContrasteClaro};
  font-size: 32px;

  &:nth-child(1) {
    font-weight: bold;
    font-size: 40px;
  }
`;

function Contadores() {
  //useState
  const [contadores, setContadores] = useState(null);

  //useEffect
  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/Dashboard/contadores");
      if (dados) {
        console.log(dados.data.data);
        setContadores(dados.data.data);
      }
    }
    obterDados();
  }, []);

  return (
    <ContadoresContainer>
      <ContadorVisitantes>
        <ContadorTexto>
          {contadores != null ? contadores.visitantes : "0"}
        </ContadorTexto>
        <ContadorTexto>Visitantes</ContadorTexto>
      </ContadorVisitantes>
      <ContadorVendas>
        <ContadorTexto>{contadores != null ? contadores.vendas : "0"}</ContadorTexto>
        <ContadorTexto>Vendas</ContadorTexto>
      </ContadorVendas>
      <ContadorNovasContas>
        <ContadorTexto>{contadores != null ? contadores.novasContas : "0"}</ContadorTexto>
        <ContadorTexto>Novas Contas</ContadorTexto>
      </ContadorNovasContas>
      <ContadorPedidos>
        <ContadorTexto>{contadores != null ? contadores.pedidos : "0"}</ContadorTexto>
        <ContadorTexto>Pedidos</ContadorTexto>
      </ContadorPedidos>
    </ContadoresContainer>
  );
}

export default Contadores;
