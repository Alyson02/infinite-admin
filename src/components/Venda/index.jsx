import React, { useState } from "react";
import { useEffect } from "react";
import {
  ContainerTabela,
  Tabela,
  Thead,
  Tr,
  Th,
  Td,
  BotoesControle,
} from "../Produtos/Tabela";
import { BotaoSimples } from "../Ui";
import { Api } from "../../services/api";
import style from "../../assets/style.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Toast from "../Toast";

function Compras() {
  const [compras, setCompras] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/compra");

      if (dados) {
        setCompras(dados.data.data);
        console.log("Compras", dados.data.data);
      }
    }
    obterDados();
  }, [isDel]);

  const history = useHistory();

  async function removeItem(id) {
    try {
      const res = await Api.delete(`/carrinho/${id}`);
      console.log(res);
      setIsDel(true);
    } catch (error) {
      setOpen(true);
    }
  }

  return (
    <ContainerTabela>
      <Toast open={open} handleClose={() => setOpen(false)} severity={"error"}>
        Erro ao excluir produto
      </Toast>
      <Tabela>
        <Thead>
          <Tr>
            <Th className="tabela__coluna--m">Venda</Th>
            <Th className="tabela__coluna--p">Pedido</Th>
            <Th className="tabela__coluna--p">Valor</Th>
            <Th className="tabela__coluna--m tabela__alinhamento--direita">
              <BotaoSimples
                style={{ display: "none" }}
                className="botao-simples--adicionar"
                onClick={() => history.push("/addProduto")}
              >
                Novo Produro
              </BotaoSimples>
            </Th>
          </Tr>
        </Thead>
        <tbody>
          {compras.length > 0 &&
            compras.map((compra) => (
              <Tr key={compra.compraId}>
                <Td className="td">{compra.compraId}</Td>
                <Td>{compra.carrinhoId}</Td>
                <Td>R$ {compra.valorFinal}</Td>
                <Td>
                  <BotoesControle>
                    <BotaoSimples className="botao-simples--detalhes">
                      <Link to={`/pedido/${compra.carrinhoId}`}>Detalhes</Link>
                    </BotaoSimples>
                    <BotaoSimples
                      className="botao-simples--excluir"
                      onClick={() => removeItem(compra.idPedido)}
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

export default Compras;
