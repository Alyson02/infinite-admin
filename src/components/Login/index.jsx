import React, { useState } from "react";
import styled from "styled-components";
import { Cartao, CartaoTitulo } from "../Cartao";
import { Container } from "../Ui";
import { Button, TextField } from "@material-ui/core";
import logo from "../../assets/images/Logo.png";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Redirect, useHistory } from "react-router-dom";
import Toast from "../Toast";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContainerLogin = styled(Container)`
  height: 100vh;
`;

const ContainerBtn = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Imagem = styled.img`
  width: 20vw;
  height: 22vh;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    width: 50vw;
    height: 20vh;
  }

  @media (max-width: 600px) {
    width: 60vw;
    height: 30vh;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const auth = useAuth();
  const history = useHistory();

  async function onFinish(event) {
    try {
      event.preventDefault();

      console.log(email, password);

      await auth.authenticate(email, password);

      history.push("/home");
    } catch (error) {
      console.log("Usuario ou senha invalidos");
      setOpen(true);
    }
  }

  if (auth.token || auth.token == null) {
    if (auth.role !== "Master" || auth.role == null) {
      return (
        <ContainerLogin>
          <Toast open={open} handleClose={() => setOpen(false)} severity={"error"}>
            Usuario ou senha inválidos
          </Toast>
          <Imagem src={logo} />
          <Cartao>
            <CartaoTitulo>Login</CartaoTitulo>
            <Form
              onSubmit={(e) => {
                onFinish(e);
              }}
            >
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email"
                variant="standard"
                margin="normal"
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Password"
                variant="standard"
                margin="normal"
              />
              <ContainerBtn>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth={true}
                >
                  Logar
                </Button>
              </ContainerBtn>
            </Form>
          </Cartao>
        </ContainerLogin>
      );
    }
    return <Redirect to="/home" />;
  }
}

export default Login;
