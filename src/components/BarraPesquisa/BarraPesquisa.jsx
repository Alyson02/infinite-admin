import React from "react";
import styled from "styled-components";
import { corContrasteClaro, corPrimaria, sombra } from "../Ui/variaveis";

export const BarraPesquisa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  width: 100%;
  height: 50px;

  background: ${corContrasteClaro};
  box-shadow: ${sombra};
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Lupa = styled.svg`
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: ease-in-out all .1s;
  /* Inside auto layout */

  &:hover{
    fill: ${corPrimaria};
  }

  flex: none;
  order: 1;
  flex-grow: 0;
`;

