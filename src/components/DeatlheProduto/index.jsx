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
import React, { useState } from "react";
import styled from "styled-components";
import { Cartao } from "../Cartao";
import { Container } from "../Ui";
import { useDetalheProduto } from "../../context/DetalheProdutoProvider/useDetalheProduto";

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

function Detalhe() {
  const [fotos, setFotos] = useState([]);

  const context = useDetalheProduto();
  console.log(context);

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form>
          <Typography variant="h4">Produto</Typography>
          <TextField
            id="titulo"
            value={context.produto.titulo}
            disabled
            variant="standard"
            margin="normal"
          />
          <TextField
            id="categoria"
            defaultValue=""
            value={context.produto.categoria}
            variant="standard"
            disabled
            margin="normal"
          />
          <TextField
            multiline
            minRows={4}
            maxRows={10}
            disabled
            variant="outlined"
            value={context.produto.descricao}
            margin="normal"
            fullWidth={false}
          />
          <Typography variant="h5">Fotos</Typography>
          <ContainerFotos>
            <BoxUpload>
              <div className="image-upload">
                <ImagePreview>
                  <img
                    id="uploaded-image"
                    src={context.produto.urlCapa}
                    draggable={false}
                    alt="uploaded-img"
                  />
                </ImagePreview>
              </div>
            </BoxUpload>
            <ContainerFotosPequenas>
              { context.fotos.map((foto) => {
                return(
                  <BoxUploadPequeno>
                    <ImagePreviewPequeno>
                    <img
                      id="uploaded-image"
                      src={foto}
                      draggable={false}
                      alt="uploaded-img"
                    />
                    </ImagePreviewPequeno>
                  </BoxUploadPequeno>)
                })}
            </ContainerFotosPequenas>
          </ContainerFotos>
          <TextField
            disabled
            id="preco"
            value={context.produto.preco}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            variant="standard"
            margin="normal"
          />
          <TextField
            disabled
            id="quantidade"
            value={context.produto.estoque}
            variant="standard"
            margin="normal"
          />
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}

export default Detalhe;
