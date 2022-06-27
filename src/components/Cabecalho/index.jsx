import React from "react";
import styled from "styled-components";
import { corContrasteClaro, corPrimaria, sombra } from "../Ui/variaveis";
import Logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";

const CabecalhoContainer = styled.header`
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${corContrasteClaro};
  border-radius: 0 0 20px 20px;
  box-shadow: ${sombra};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.75rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const CabecalhoLogo = styled.img`
  width: 9rem;
`;

const CabecalhoLista = styled.ul`
  display: flex;
`;

const CabecalhoLink = styled.li`
  margin-left: 2rem;
  cursor: pointer;
  transition: all .1s;

  &:hover{
    color: ${corPrimaria};
  }

  .ativado{
    color: ${corPrimaria}
  }
`;

export default function Cabecalho() {
  const auth = useAuth();

  return (
    <CabecalhoContainer>
      <CabecalhoLogo src={Logo} />
      <nav>
        <CabecalhoLista>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/home'>  Dashboard  </NavLink>  </CabecalhoLink>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/produtos'>  Produtos  </NavLink> </CabecalhoLink>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/pedidos'> Pedidos </NavLink> </CabecalhoLink>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/vendas'> Vendas </NavLink> </CabecalhoLink>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/funcionarios'> Funcionários </NavLink> </CabecalhoLink>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/clientes'> Clientes </NavLink> </CabecalhoLink>
          <CabecalhoLink> <NavLink activeClassName="ativado" to='/agendas'> Agendas </NavLink> </CabecalhoLink>
          <CabecalhoLink> <NavLink style={{color:'red'}} to='/' onClick={() => auth.logout()}> Sair </NavLink> </CabecalhoLink>
        </CabecalhoLista>
      </nav>
    </CabecalhoContainer>
  );
}
