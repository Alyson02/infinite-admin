import styled from "styled-components";
import {
  corContrasteClaro,
  corSecundaria,
  fonteTamanhoTabelaCabecalho,
  sombra,
} from "../../Ui/variaveis";

export const Tabela = styled.table`
  margin-top: 2.25rem;
  width: 100%;
  background-color: ${corContrasteClaro};
  border-radius: 10px;
  box-shadow: ${sombra};
  border-collapse: initial;
  text-align: left;
`;

export const ContainerTabela = styled.main`
  padding-right: 2rem;
  padding-left: 2rem;
  width: 100%;
`;

export const Th = styled.th`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${corSecundaria};

  &:first-of-type {
    padding-left: 1.75rem;
  }

  &:last-of-type {
    padding-right: 1.75rem;
  }
`;

export const Td = styled.td`
  padding-top: 1rem;
  padding-bottom: 1rem;

  .td{
    padding: 1rem;
  }

  &:last-of-type {
    padding-right: 1.75rem;
  }

  &:first-of-type {
    padding-left: 1.75rem;
  }
`;

export const Tr = styled.tr`
    &:last-of-type td{
        padding-bottom: 1.75rem;
    }
`;

export const Thead = styled.thead`
  font-size: ${fonteTamanhoTabelaCabecalho};
`;

export const BotoesControle = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

