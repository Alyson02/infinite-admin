import styled from "styled-components";
import {
  corAviso,
  corContrasteClaro,
  corDetalhe,
  corPrimaria,
  corSucesso,
  fontePesoInput,
  fonteTamanhoBotao,
} from "./variaveis";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  font-weight: ${fontePesoInput};
  position: relative;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const Botao = styled.button`
  display: block;
  background-color: ${corAviso};
  border-radius: 7px;
  width: 100%;
  margin-top: 1rem;
  max-width: 20rem;
  padding: 1.125rem;
  box-sizing: border-box;
  color: ${corContrasteClaro};
  font-size: ${fonteTamanhoBotao};
  align-self: center;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const BotaoSimples = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;
  font-size: 20px;
`;
