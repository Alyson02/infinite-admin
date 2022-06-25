import React, { useState } from "react";
import styled from "styled-components";
import { Cartao, CartaoTitulo } from "../Cartao";
import { Container } from "../Ui";
import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import { BoxUpload, BoxUploadPequeno, ContainerFotos, ContainerFotosPequenas, ImagePreview, ImagePreviewPequeno, LabelInputUpload } from "./uploadStyle";
import FolderIcon  from "../../assets/images/folder.png";
import FolderIconPequeno  from "../../assets/images/folder-pequeno.png";
import CloseIcon   from "../../assets/images/CloseIcon.svg";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Redirect, useHistory } from "react-router-dom";
import { useAddProduto } from "../../context/AddProdutoProvider/useAddProduto";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContainerProduto = styled(Container)`
  height: auto;
  width: 100vw;
`;

const ContainerBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CartaoProd = styled(Cartao)`
  height: 80%;
`;

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

function FormProduto() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");

  const addProduto = useAddProduto();

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);

      console.log(reader)
    }
  }

  async function onFinish(e){
    
  }

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form onSubmit={(e) => onFinish(e)}>
          <Typography variant="h4">Produto</Typography>
          <TextField
            onChange={(e) => setTitulo(e.target.value)}
            id="titulo"
            label="Titulo"
            variant="standard"
            margin="normal"
          />
          <TextField
            select
            id="categoria"
            defaultValue = ""
            label="Categoria"
            variant="standard"
            onChange={(e) => setCategoria(console.log(e.target.value))}
            margin="normal"
          >
            {addProduto.categorias.map((categoria) => (
              <MenuItem key={categoria.categoriaId} value={categoria.categoriaId}>
                {categoria.categoria}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            minRows={4}
            maxRows={10}
            variant="outlined"
            label="Descrição"
            margin="normal"
            fullWidth={false}
          />
          <Typography variant="h5">Fotos</Typography>
          <ContainerFotos>
          <BoxUpload>
            <div className="image-upload">
              {!isUploaded ? (
                <>
                  <LabelInputUpload className="labelInputUpload" htmlFor="upload-input">
                    <img
                      src={FolderIcon}
                      draggable={"false"}
                      alt="placeholder"
                      style={{ width: 100, height: 100 }}
                    />
                    <p style={{ color: "#444" }}>Clique para adicionar uma capa</p>
                  </LabelInputUpload>

                  <input
                    id="upload-input"
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                    onChange={handleImageChange}
                  />
                </>
              ) : (
                <ImagePreview>
                  <img
                    className="close-icon"
                    src={CloseIcon}
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setImage(null);
                    }}
                  />
                  {typeFile.includes("video") ? (
                    <video
                      id="uploaded-image"
                      src={image}
                      draggable={false}
                      controls
                      autoPlay
                      alt="uploaded-img"
                    />
                  ) : (
                    <img
                      id="uploaded-image"
                      src={image}
                      draggable={false}
                      alt="uploaded-img"
                    />
                  )}
                </ImagePreview>
              )}
            </div>
          </BoxUpload>
            <ContainerFotosPequenas>
              <BoxUploadPequeno>
              <div className="image-upload">
                {!isUploaded ? (
                  <>
                    <LabelInputUpload className="labelInputUpload" htmlFor="upload-input">
                      <img
                        src={FolderIconPequeno}
                        draggable={"false"}
                        alt="placeholder"
                        style={{ width: 50, height: 50 }}
                      />
                      <p style={{ color: "#444"}}>Foto1</p>
                    </LabelInputUpload>

                    <input
                      id="upload-input"
                      type="file"
                      accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                      onChange={handleImageChange}
                    />
                  </>
                ) : (
                  <ImagePreviewPequeno>
                    <img
                      className="close-icon"
                      src={CloseIcon}
                      alt="CloseIcon"
                      onClick={() => {
                        setIsUploaded(false);
                        setImage(null);
                      }}
                    />
                    {typeFile.includes("video") ? (
                      <video
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        controls
                        autoPlay
                        alt="uploaded-img"
                      />
                    ) : (
                      <img
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        alt="uploaded-img"
                      />
                    )}
                  </ImagePreviewPequeno>
                )}
              </div>
              </BoxUploadPequeno>
              <BoxUploadPequeno>
              <div className="image-upload">
                {!isUploaded ? (
                  <>
                    <LabelInputUpload className="labelInputUpload" htmlFor="upload-input">
                      <img
                        src={FolderIconPequeno}
                        draggable={"false"}
                        alt="placeholder"
                        style={{ width: 50, height: 50 }}
                      />
                      <p style={{ color: "#444" }}>Foto2</p>
                    </LabelInputUpload>

                    <input
                      id="upload-input"
                      type="file"
                      accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                      onChange={handleImageChange}
                    />
                  </>
                ) : (
                  <ImagePreviewPequeno>
                    <img
                      className="close-icon"
                      src={CloseIcon}
                      alt="CloseIcon"
                      onClick={() => {
                        setIsUploaded(false);
                        setImage(null);
                      }}
                    />
                    {typeFile.includes("video") ? (
                      <video
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        controls
                        autoPlay
                        alt="uploaded-img"
                      />
                    ) : (
                      <img
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        alt="uploaded-img"
                      />
                    )}
                  </ImagePreviewPequeno>
                )}
              </div>
              </BoxUploadPequeno>
              <BoxUploadPequeno>
              <div className="image-upload">
                {!isUploaded ? (
                  <>
                    <LabelInputUpload className="labelInputUpload" htmlFor="upload-input">
                      <img
                        src={FolderIconPequeno}
                        draggable={"false"}
                        alt="placeholder"
                        style={{ width: 50, height: 50 }}
                      />
                      <p style={{ color: "#444" }}>Foto3</p>
                    </LabelInputUpload>

                    <input
                      id="upload-input"
                      type="file"
                      accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                      onChange={handleImageChange}
                    />
                  </>
                ) : (
                  <ImagePreviewPequeno>
                    <img
                      className="close-icon"
                      src={CloseIcon}
                      alt="CloseIcon"
                      onClick={() => {
                        setIsUploaded(false);
                        setImage(null);
                      }}
                    />
                    {typeFile.includes("video") ? (
                      <video
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        controls
                        autoPlay
                        alt="uploaded-img"
                      />
                    ) : (
                      <img
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        alt="uploaded-img"
                      />
                    )}
                  </ImagePreviewPequeno>
                )}
              </div>
              </BoxUploadPequeno>
              <BoxUploadPequeno>
              <div className="image-upload">
                {!isUploaded ? (
                  <>
                    <LabelInputUpload className="labelInputUpload" htmlFor="upload-input">
                      <img
                        src={FolderIconPequeno}
                        draggable={"false"}
                        alt="placeholder"
                        style={{ width: 50, height: 50 }}
                      />
                      <p style={{ color: "#444" }}>Foto4</p>
                    </LabelInputUpload>

                    <input
                      id="upload-input"
                      type="file"
                      accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                      onChange={handleImageChange}
                    />
                  </>
                ) : (
                  <ImagePreviewPequeno>
                    <img
                      className="close-icon"
                      src={CloseIcon}
                      alt="CloseIcon"
                      onClick={() => {
                        setIsUploaded(false);
                        setImage(null);
                      }}
                    />
                    {typeFile.includes("video") ? (
                      <video
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        controls
                        autoPlay
                        alt="uploaded-img"
                      />
                    ) : (
                      <img
                        id="uploaded-image"
                        src={image}
                        draggable={false}
                        alt="uploaded-img"
                      />
                    )}
                  </ImagePreviewPequeno>
                )}
              </div>
              </BoxUploadPequeno>
            </ContainerFotosPequenas>
          </ContainerFotos>
          <TextField
            onChange={(e) => setPreco(e.target.value)}
            id="preco"
            label="Preco"
            variant="standard"
            margin="normal"
          />
          <TextField
            onChange={(e) => setQuantidade(e.target.value)}
            id="quantidade"
            label="Quantidade"
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
              CADASTRAR PRODUTO
            </Button>
          </ContainerBtn>
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}

export default FormProduto;
