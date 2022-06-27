import { Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cartao } from "../Cartao";
import { Container } from "../Ui";
import { Api } from "../../services/api";
import { useHistory, useParams } from "react-router-dom";

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

function DetalheCliente() {
  const [cliente, setcliente] = useState({});
  const [usuario, setUsuario] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getFuncionario() {
      try {
        const res = await Api.get(`/cliente/${id}`);
        console.log(res.data.data);
        setcliente(res.data.data);
        setUsuario(res.data.data.usuario);
      } catch (error) {
        console.log(error);
      }
    }
    getFuncionario();
  }, []);

  console.log(cliente);

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form>
          <Typography variant="h4">cliente</Typography>
          <TextField
            id="nome"
            value={cliente.nome}
            disabled
            variant="standard"
            margin="normal"
          />
          <TextField
            id="nome"
            value={cliente.tell}
            disabled
            variant="standard"
            margin="normal"
          />
          <TextField
            id="email"
            variant="standard"
            value={cliente.email}
            disabled
            margin="normal"
          />
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}
export default DetalheCliente;
