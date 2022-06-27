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

function DetalheFuncionario() {
  const [funcionario, setFuncionario] = useState({});
  const [usuario, setUsuario] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getFuncionario() {
      try {
        const res = await Api.get(`/funcionario/${id}`);
        console.log(res.data.data)
        setFuncionario(res.data.data);
        setUsuario(res.data.data.usuario)
      } catch (error) {
       console.log(error) 
      }
    }
    getFuncionario();
  }, []);

  console.log(funcionario)

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form>
          <Typography variant="h4">Funcionário</Typography>
          <TextField
            id="nome"
            value={funcionario.nome}
            variant="standard"
            margin="normal"
          />
          <TextField
            id="telefone"
            value={funcionario.telefone}
            variant="standard"
            margin="normal"
          />
          <TextField
            id="email"
            variant="standard"
            value={usuario.email}
            margin="normal"
          />
          <TextField
            id="senha"
            value={usuario.password}
            variant="standard"
            margin="normal"
          />
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}
export default DetalheFuncionario;
