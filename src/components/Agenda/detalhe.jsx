import { Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cartao } from "../Cartao";
import { Container } from "../Ui";
import { Api } from "../../services/api";
import { useHistory, useParams } from "react-router-dom";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContainerProduto = styled(Container)`
  height: auto;
  width: 100vw;
`;
const CartaoProd = styled(Cartao)`
  height: 80%;
`;

const ContainerBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function DetalheAgenda() {
  const [agendamento, setagendamento] = useState({});
  const [jogo, setJogo] = useState({});
  const [cliente, setCliente] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getAgendamento() {
      try {
        const res = await Api.get(`/agendamento/${id}`);
        console.log(res.data.data);
        setagendamento(res.data.data);
        setJogo(res.data.data.jogo);
        setCliente(res.data.data.cliente);
      } catch (error) {
        console.log(error);
      }
    }
    getAgendamento();
  }, []);

  console.log(agendamento);

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form>
          <Typography variant="h4">Agendamento <span style={{color:"#777777", fontSize:"25px"}}>{agendamento.agendamentoId}</span></Typography>
          <TextField
            id="nome"
            value={cliente.nome}
            disabled
            variant="standard"
            margin="normal"
          />
          <TextField
            id="jogo"
            value={jogo.nome}
            disabled
            variant="standard"
            margin="normal"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              id="email"
              value={agendamento.horario}
              disabled
              margin="normal"
            />
          </MuiPickersUtilsProvider>
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}
export default DetalheAgenda;
