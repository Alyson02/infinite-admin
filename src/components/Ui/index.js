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

export const ImgLupa = 'M27.3601 24.2648L20.814 17.7187C22.3026 15.5088 23.037 12.7476 22.6438 9.80545C21.9734 4.801 17.8718 0.728419 12.8624 0.0942077C5.41455 -0.848222 -0.848266 5.41459 0.094218 12.8625C0.728593 17.874 4.80172 21.9789 9.80672 22.6461C12.7489 23.0392 15.5106 22.305 17.72 20.8162L24.2661 27.3623C25.1203 28.2165 26.5055 28.2165 27.3598 27.3623C28.2132 26.507 28.2132 25.118 27.3601 24.2648ZM4.32572 11.375C4.32572 7.51514 7.46587 4.37498 11.3257 4.37498C15.1856 4.37498 18.3257 7.51514 18.3257 11.375C18.3257 15.2348 15.1856 18.375 11.3257 18.375C7.46587 18.375 4.32572 15.2359 4.32572 11.375Z'
