import React, { useState } from "react";
import { useEffect } from "react";
import { ContainerTabela, Tabela, Thead, Tr, Th, Td, BotoesControle } from ".";
import { BotaoSimples } from "../../Ui";
import { Api } from "../../../services/api"
import style from "../../../assets/style.css"
import { Redirect, useHistory } from "react-router-dom";

function TabelaProduto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function obterDados(){
        const dados = await Api.get('/produto') 

        if(dados){
            setProdutos(dados.data.data);
            console.log("Produtos", dados.data.data)
        }
    }
    obterDados();
  },[])

  const history = useHistory();

  return (
    <ContainerTabela>
      <Tabela>
        <Thead>
          <Tr>
            <Th className="tabela__coluna--m">Titulo</Th>
            <Th className="tabela__coluna--p">Categoria</Th>
            <Th className="tabela__coluna--p">Preço</Th>
            <Th className="tabela__coluna--m tabela__alinhamento--direita">
              <BotaoSimples className="botao-simples--adicionar" onClick={() => history.push('/addProduto')}>
                Novo Produro
              </BotaoSimples>
            </Th>
          </Tr>
        </Thead>
        <tbody>
            {produtos.length > 0 &&
              produtos.map((produto) => (
                <Tr key={produto.produtoID}>
                  <Td className="td">{produto.nome}</Td>
                  <Td >{produto.categoria}</Td>
                  <Td >R$ {produto.preco}</Td>
                  <Td>
                    <BotoesControle>
                      <BotaoSimples className="botao-simples--detalhes">
                        Detalhes
                      </BotaoSimples>
                      <BotaoSimples className="botao-simples--editar">
                        Editar
                      </BotaoSimples>
                      <BotaoSimples className="botao-simples--excluir">
                        Excluir
                      </BotaoSimples>
                    </BotoesControle>
                  </Td>
                </Tr>
              ))}
          </tbody>
      </Tabela>
    </ContainerTabela>
  );
}

export default TabelaProduto;
