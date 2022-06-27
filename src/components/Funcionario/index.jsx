import React, { useState } from "react";
import { useEffect } from "react";
import { ContainerTabela, Tabela, Thead, Tr, Th, Td, BotoesControle } from "../Produtos/Tabela";
import { BotaoSimples } from "../Ui";
import { Api } from "../../services/api";
import style from "../../assets/style.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Toast from "../Toast";

function Funcionarios() {
  const [funcionarios, setFunrionarios] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const [open, setOpen] = useState(false);

  async function removeItem(id) {
    try {
      const res = await Api.delete(`/funcionario/${id}`);
      console.log(res);
      setIsDel(true);
    } catch (error) {
      setOpen(true);
    }
  }

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/funcionario");

      if (dados) {
        setFunrionarios(dados.data.data);
        console.log("Funcionarios", dados.data.data);
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
              <BotaoSimples
                className="botao-simples--adicionar"
                onClick={() => history.push("/addFuncionario")}
              >
                Novo Funcionario
              </BotaoSimples>
            </Th>
          </Tr>
        </Thead>
        <tbody>
          {funcionarios.length > 0 &&
            funcionarios.map((funcionario) => (
              <Tr key={funcionario.funcionarioId}>
                <Td className="td">{funcionario.nome}</Td>
                <Td>{funcionario.email}</Td>
                <Td>R$ {funcionario.telefone}</Td>
                <Td>
                  <BotoesControle>
                    <BotaoSimples className="botao-simples--detalhes">
                      <Link to={`/funcionario/${funcionario.funcionarioId}`}>Detalhes</Link>
                    </BotaoSimples>
                    <BotaoSimples className="botao-simples--editar">
                      <Link to={`/update-funcionario/${funcionario.funcionarioId}`}>Editar</Link>
                    </BotaoSimples>
                    <BotaoSimples
                      className="botao-simples--excluir"
                      onClick={() => removeItem(funcionario.funcionarioId)}
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

export default Funcionarios;
