import { Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cartao } from "../Cartao";
import { Container } from "../Ui";
import { Api } from "../../services/api";
import { useHistory, useParams } from "react-router-dom";
import Toast from "../Toast";

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

function AtualizaFuncionario() {
  const [funcionario, setFuncionario] = useState({});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [open, setOpen] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function getFuncionario() {
      try {
        const res = await Api.get(`/funcionario/${id}`);
        console.log(res.data.data);
        setFuncionario(res.data.data);
        setNome(res.data.data.nome);
        setTelefone(res.data.data.telefone);
        setEmail(res.data.data.usuario.email);
        setSenha(res.data.data.usuario.password);
      } catch (error) {
        console.log(error);
      }
    }
    getFuncionario();
  }, []);

  async function atualizarFuncionario(e) {
    e.preventDefault();
    try {
      console.log(id);
      const res = await Api.put(`/funcionario/${id}`, {
        funcionarioId: id,
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha,
      });

      setMensagem("Funcionário cadastro com sucesso");
      setOpen(true);
      setTimeout(() => {
        history.push("/funcionarios");
      }, 1000);
      console.log(mensagem);
    } catch (error) {
      setMensagem("Erro ao cadastrar funcionário");
      setOpen(true);
      console.log(error);
    }
  }
  console.log(funcionario);

  return (
    <>
      <Toast open={open} severity={"success"} handleClose={() => setOpen(false)}>
        {mensagem}
      </Toast>
      <ContainerProduto>
        <CartaoProd>
          <Form onSubmit={(e) => atualizarFuncionario(e)}>
            <Typography variant="h4">Funcionário</Typography>
            <TextField
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              variant="standard"
              margin="normal"
            />
            <TextField
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              variant="standard"
              margin="normal"
            />
            <TextField
              id="email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              margin="normal"
            />
            <TextField
              id="senha"
              value={senha}
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
                ATUALIZAR FUNCIONARIO
              </Button>
            </ContainerBtn>
          </Form>
        </CartaoProd>
      </ContainerProduto>
    </>
  );
}
export default AtualizaFuncionario;
