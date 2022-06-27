import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField, Typography } from "@material-ui/core";
import {
  BoxUpload,
  BoxUploadPequeno,
  ContainerFotos,
  ContainerFotosPequenas,
  ImagePreview,
  ImagePreviewPequeno,
} from "../AddProduto/uploadStyle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cartao } from "../Cartao";
import { Container } from "../Ui";
import { useDetalheProduto } from "../../context/DetalheProdutoProvider/useDetalheProduto";
import { Api } from "../../services/api";
import { useParams } from "react-router-dom";

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

const P = styled.span`
  color: #6e6e6e;
  font-size: 25px;
`;

const Produtos = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
  margin-top: 20px;
`;

const LinhaProduto = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Item = styled.span`
  width: 30%;
  margin-top: 10px;
  font-size: 20px;
`;

function Pedido() {
  const [pedido, setPedido] = useState({});
  const { id } = useParams();

  const [produtos, setProdutos] = useState(pedido.produtos);

  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get(`/carrinho/carrinhos/${id}`);
      if (dados) {
        setPedido(dados.data.data);
        console.log("Pedido", dados.data.data);
        setProdutos(dados.data.data.produtos);
      }
    }
    obterDados();
  }, []);

  console.log("Produtos", produtos);

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form>
          <Typography variant="h4">
            Pedido <P>{pedido.idPedido}</P>
          </Typography>
          <TextField
            id="titulo"
            value={pedido.nomeCliente}
            disabled
            variant="standard"
            margin="normal"
          />
          <TextField
            id="categoria"
            defaultValue=""
            value={`R$ ${pedido.valor}`}
            variant="standard"
            disabled
            margin="normal"
          />
          <TextField
            id="categoria"
            defaultValue=""
            value={pedido.status}
            variant="standard"
            disabled
            margin="normal"
          />
        </Form>
        <Typography variant="h5">Produtos</Typography>
        <Produtos>
          <LinhaProduto>
            <Item>Produto</Item>
            <Item>Preço</Item>
            <Item>Quantidade</Item>
          </LinhaProduto>
          {produtos != null &&
            produtos.map((produto) => {
              return (
                <LinhaProduto style={{marginTop:20}}>
                  <Item style={{fontSize:17}}>{produto.nome}</Item>
                  <Item style={{fontSize:17}}>R$ {produto.preco}</Item>
                  <Item style={{fontSize:17}}>{produto.quantidade}</Item>
                </LinhaProduto>
              );
            })}
        </Produtos>
      </CartaoProd>
    </ContainerProduto>
  );
}
export default Pedido;
