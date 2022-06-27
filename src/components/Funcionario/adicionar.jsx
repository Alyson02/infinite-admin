import { Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cartao } from "../Cartao";
import { Container } from "../Ui";
import { Api } from "../../services/api";
import { useHistory } from "react-router-dom";

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

function FuncionarioForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [open, setOpen] = useState(false);
  const history = useHistory();

  async function AddFuncionario(e) {
    e.preventDefault();
    try {
      const res = await Api.post("/funcionario", {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
      });
      console.log(res);
      history.push("/funcionarios");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form onSubmit={(e) => AddFuncionario(e)}>
          <Typography variant="h4">Funcionário</Typography>
          <TextField
            id="nome"
            label="Nome"
            onChange={(e) => setNome(e.target.value)}
            variant="standard"
            margin="normal"
          />
          <TextField
            id="telefone"
            label="Telefone"
            onChange={(e) => setTelefone(e.target.value)}
            variant="standard"
            margin="normal"
          />
          <TextField
            id="email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            margin="normal"
          />
          <TextField
            id="senha"
            label="Senha"
            onChange={(e) => setSenha(e.target.value)}
            variant="standard"
            margin="normal"
          />
          <ContainerBtn>
            <Button
              size="large"
              type="submit"
              color="primary"
              variant="contained"
            >
              CADASTRAR FUNCIONARIO
            </Button>
          </ContainerBtn>
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}
export default FuncionarioForm;
