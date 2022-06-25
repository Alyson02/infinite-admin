import styled from "styled-components";
import { corContrasteClaro, fonteTamanhoCartaotitulo, sombra } from "../Ui/variaveis";

export const Cartao = styled.section`
    background-color: ${corContrasteClaro};
    border-radius: 10px;
    box-shadow: ${sombra};
    width: 100%;
    max-width: 45rem;
    padding: 1.75rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
` 

export const CartaoTitulo = styled.h1`
    font-size: ${fonteTamanhoCartaotitulo};
    margin-bottom: 1rem;
    
` 