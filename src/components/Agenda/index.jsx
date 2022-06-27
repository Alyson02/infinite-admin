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

function Agendas() {
  const [agendas, setAgenda] = useState([]);
  const [isDel, setIsDel] = useState(false);
  const [open, setOpen] = useState(false);

  async function removeItem(id) {
    try {
      const res = await Api.delete(`/agendamento/${id}`);
      console.log(res);
      setIsDel(true);
    } catch (error) {
      setOpen(true);
    }
  }

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/agendamento");

      if (dados) {
        setAgenda(dados.data.data);
        console.log("Agendas", dados.data.data);
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
            <Th className="tabela__coluna--m">Agenda</Th>
            <Th className="tabela__coluna--p">Produto</Th>
            <Th className="tabela__coluna--p">Data</Th>
            <Th className="tabela__coluna--m tabela__alinhamento--direita"></Th>
          </Tr>
        </Thead>
        <tbody>
          {agendas.length > 0 &&
            agendas.map((agenda) => (
              <Tr key={agenda.agendamentoId}>
                <Td className="td">{agenda.agendamentoId}</Td>
                <Td>{agenda.jogo}</Td>
                <Td>{agenda.horario}</Td>
                <Td>
                  <BotoesControle>
                    <BotaoSimples className="botao-simples--detalhes">
                      <Link to={`/agenda/${agenda.agendamentoId}`}>Detalhes</Link>
                    </BotaoSimples>
                    <BotaoSimples
                      className="botao-simples--excluir"
                      onClick={() => removeItem(agenda.agendamentoId)}
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

export default Agendas;
