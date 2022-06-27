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

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/carrinho/carrinhos");

      if (dados) {
        setPedidos(dados.data.data);
        console.log("Pedido", dados.data.data);
      }
    }
    obterDados();
  }, [isDel]);

  const history = useHistory();

  async function removeItem(id) {
    try {
      const res = await Api.delete(`/pedido/${id}`);
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
            <Th className="tabela__coluna--m">Cliente</Th>
            <Th className="tabela__coluna--p">Valor</Th>
            <Th className="tabela__coluna--p">Status</Th>
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
          {pedidos.length > 0 &&
            pedidos.map((pedido) => (
              <Tr key={pedido.idPedido}>
                <Td className="td">{pedido.nomeCliente}</Td>
                <Td>R$ {pedido.valor}</Td>
                <Td>{pedido.status}</Td>
                <Td>
                  <BotoesControle>
                    <BotaoSimples className="botao-simples--detalhes">
                      <Link to={`/pedido/${pedido.idPedido}`}>Detalhes</Link>
                    </BotaoSimples>
                    <BotaoSimples
                      className="botao-simples--excluir"
                      onClick={() => removeItem(pedido.idPedido)}
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

export default Pedidos;
