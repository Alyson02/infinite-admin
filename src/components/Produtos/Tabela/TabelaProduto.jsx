import React, { useState } from "react";
import { useEffect } from "react";
import { ContainerTabela, Tabela, Thead, Tr, Th, Td, BotoesControle } from ".";
import { BotaoSimples, ImgLupa } from "../../Ui";
import { Api } from "../../../services/api";
import style from "../../../assets/style.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Toast from "../../Toast";
import { BarraPesquisa, Lupa, Texto } from "../../BarraPesquisa/BarraPesquisa";
import { InputBase } from "@material-ui/core";

function TabelaProduto() {
  const [produtos, setProdutos] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const [open, setOpen] = useState(false);
  const [pesquisa, setPesquisa] = useState("");

  async function removeItem(id) {
    try {
      const res = await Api.delete(`/produto/${id}`);
      console.log(res);
      setIsDel(true);
    } catch (error) {
      setOpen(true);
    }
  }

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/produto");

      if (dados) {
        setProdutos(dados.data.data);
        console.log("Produtos", dados.data.data);
      }
    }
    obterDados();
  }, [isDel]);

  async function PesquisaProduto(nome){
    const dados = await Api.get(`/produto?nome=${nome}`);
    setProdutos(dados.data.data);
  }

  const history = useHistory();

  return (
    <ContainerTabela>
      <Toast open={open} handleClose={() => setOpen(false)} severity={"error"}>
        Erro ao excluir produto
      </Toast>
      <BarraPesquisa>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
          fullWidth={true}
          onChange={e => setPesquisa(e.target.value)}
        />
        <Lupa onClick={() => PesquisaProduto(pesquisa)}>
          <path d={ImgLupa}></path>
        </Lupa>
      </BarraPesquisa>
      <Tabela>
        <Thead>
          <Tr>
            <Th className="tabela__coluna--m">Titulo</Th>
            <Th className="tabela__coluna--p">Categoria</Th>
            <Th className="tabela__coluna--p">Preço</Th>
            <Th className="tabela__coluna--m tabela__alinhamento--direita">
              <BotaoSimples
                className="botao-simples--adicionar"
                onClick={() => history.push("/addProduto")}
              >
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
                <Td>{produto.categoria}</Td>
                <Td>R$ {produto.preco}</Td>
                <Td>
                  <BotoesControle>
                    <BotaoSimples className="botao-simples--detalhes">
                      <Link to={`/produto/${produto.produtoID}`}>Detalhes</Link>
                    </BotaoSimples>
                    <BotaoSimples className="botao-simples--editar">
                      <Link to={`/update-produto/${produto.produtoID}`}>
                        Editar
                      </Link>
                    </BotaoSimples>
                    <BotaoSimples
                      className="botao-simples--excluir"
                      onClick={() => removeItem(produto.produtoID)}
                    >
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
