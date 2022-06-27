import React, { useState } from "react";
import { useEffect } from "react";
import { ContainerTabela, Tabela, Thead, Tr, Th, Td, BotoesControle } from "../Produtos/Tabela";
import { BotaoSimples } from "../Ui";
import { Api } from "../../services/api";
import style from "../../assets/style.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Toast from "../Toast";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const [open, setOpen] = useState(false);

  async function removeItem(id) {
    try {
      const res = await Api.delete(`/cliente/${id}`);
      console.log(res);
      setIsDel(true);
    } catch (error) {
      setOpen(true);
    }
  }

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/cliente");

      if (dados) {
        setClientes(dados.data.data);
        console.log("Clientes", dados.data.data);
      }
    }
    obterDados();
  }, [isDel]);

  const history = useHistory();

  return (
    <ContainerTabela>
      <Toast open={open} handleClose={() => setOpen(false)} severity={"error"}>
        Erro ao excluir produto
      </Toast>
      <Tabela>
        <Thead>
          <Tr>
            <Th className="tabela__coluna--m">Nome</Th>
            <Th className="tabela__coluna--p">Email</Th>
            <Th className="tabela__coluna--p">Telefone</Th>
            <Th className="tabela__coluna--m tabela__alinhamento--direita">
              
            </Th>
          </Tr>
        </Thead>
        <tbody>
          {clientes.length > 0 &&
            clientes.map((cliente) => (
              <Tr key={cliente.clienteId}>
                <Td className="td">{cliente.nome}</Td>
                <Td>{cliente.email}</Td>
                <Td>{cliente.tell}</Td>
                <Td>
                  <BotoesControle>
                    <BotaoSimples className="botao-simples--detalhes">
                      <Link to={`/cliente/${cliente.clienteId}`}>Detalhes</Link>
                    </BotaoSimples>
                    <BotaoSimples
                      className="botao-simples--excluir"
                      onClick={() => removeItem(cliente.clienteId)}
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

export default Clientes;
