import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cartao, CartaoTitulo } from "../Cartao";
import { Container } from "../Ui";
import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  BoxUpload,
  BoxUploadPequeno,
  ContainerFotos,
  ContainerFotosPequenas,
  ImagePreview,
  ImagePreviewPequeno,
  LabelInputUpload,
} from "../AddProduto/uploadStyle";
import FolderIcon from "../../assets/images/folder.png";
import FolderIconPequeno from "../../assets/images/folder-pequeno.png";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useAddProduto } from "../../context/AddProdutoProvider/useAddProduto";
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

const ContainerBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CartaoProd = styled(Cartao)`
  height: 80%;
`;

function FormUpdateProduto() {
  const [typeFile, setTypeFile] = useState("");
  const [typeFileFoto1, setTypeFileFoto1] = useState("");
  const [typeFileFoto2, setTypeFileFoto2] = useState("");
  const [typeFileFoto3, setTypeFileFoto3] = useState("");
  const [typeFileFoto4, setTypeFileFoto4] = useState("");
  const [capaBase64, setcapaBase64] = useState("");
  const [foto1Base64, setFoto1Base64] = useState("");
  const [foto2Base64, setFoto2Base64] = useState("");
  const [foto3Base64, setFoto3Base64] = useState("");
  const [foto4Base64, setFoto4Base64] = useState("");
  const [fotos, setFotos] = useState([]);

  const addProduto = useAddProduto();
  const detalheProduto = useDetalheProduto();
  const history = useHistory();
  const { id } = useParams();

  const [titulo, setTitulo] = useState(detalheProduto.produto.titulo);
  const [categoria, setCategoria] = useState(detalheProduto.produto.categoria);
  const [categoriaId, setCategoriaId] = useState(
    detalheProduto.produto.categoriaId
  );
  const [preco, setPreco] = useState(detalheProduto.produto.preco);
  const [quantidade, setQuantidade] = useState(detalheProduto.produto.estoque);
  const [descricao, setDescricao] = useState(detalheProduto.produto.descricao);

  const [image, setImage] = useState(detalheProduto.produto.urlCapa);
  const [isUploaded, setIsUploaded] = useState(true);

  const [foto1, setFoto1] = useState(detalheProduto.fotos[0]);
  const [foto2, setFoto2] = useState(detalheProduto.fotos[1]);
  const [foto3, setFoto3] = useState(detalheProduto.fotos[2]);
  const [foto4, setFoto4] = useState(detalheProduto.fotos[3]);

  const [isUploadedFoto1, setIsUploadedFoto1] = useState(true);
  const [isUploadedFoto2, setIsUploadedFoto2] = useState(true);
  const [isUploadedFoto3, setIsUploadedFoto3] = useState(true);
  const [isUploadedFoto4, setIsUploadedFoto4] = useState(true);

  console.log(categoriaId);

  useEffect(
    () => {
      setCategoriaId(detalheProduto.produto.categoriaId);
      setQuantidade(detalheProduto.produto.estoque);
      setDescricao(detalheProduto.produto.descricao);
      setFotos(detalheProduto.fotos);
      setFoto1(fotos[0]);
      setIsUploadedFoto1(true);
      setFoto2(fotos[1]);
      setIsUploadedFoto2(true);
      setFoto3(fotos[2]);
      setIsUploadedFoto3(true);
      setFoto4(fotos[3]);
      setIsUploadedFoto4(true);
      console.log("AAAAAAAAAAAAA", detalheProduto);
      setTitulo(detalheProduto.produto.titulo);
      setCategoria(detalheProduto.produto.categoria);
      setImage(detalheProduto.produto.urlCapa);
      setPreco(detalheProduto.produto.preco);
    },descricao
  );

  function handleImageChange(ev, tipo) {
    if (ev.target.files && ev.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(ev.target.files[0]);
      reader.onload = function (e) {
        switch (tipo) {
          case "foto1":
            setFoto1(e.target.result);
            setIsUploadedFoto1(true);
            const foto1Base64 = reader.result;
            setFoto1Base64(foto1Base64);
            console.log(tipo, foto1Base64);
            setTypeFileFoto1(ev.target.files[0].type);
            break;
          case "foto2":
            setFoto2(e.target.result);
            setIsUploadedFoto2(true);
            const foto2Base64 = reader.result;
            setFoto2Base64(foto2Base64);
            console.log(tipo, foto2Base64);
            setTypeFileFoto2(ev.target.files[0].type);
            break;
          case "foto3":
            setFoto3(e.target.result);
            setIsUploadedFoto3(true);
            const foto3Base64 = reader.result;
            setFoto3Base64(foto3Base64);
            console.log(tipo, foto3Base64);
            setTypeFileFoto3(ev.target.files[0].type);
            break;
          case "foto4":
            setFoto4(e.target.result);
            setIsUploadedFoto4(true);
            const foto4Base64 = reader.result;
            setFoto4Base64(foto4Base64);
            console.log(tipo, foto4Base64);
            setTypeFileFoto4(ev.target.files[0].type);
            break;
          default:
            setImage(e.target.result);
            setIsUploaded(true);
            const base64 = reader.result;
            setcapaBase64(base64);
            console.log(tipo, base64);
            setTypeFile(ev.target.files[0].type);
            break;
        }
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
  }

  async function onFinish(e) {
    e.preventDefault();
    const Produto = {
      id: id,
      nome: titulo,
      quantidade: quantidade,
      preco: preco,
      categoriaId: categoriaId,
      descricao: descricao,
      capa: {
        nome: "capa",
        base64: capaBase64,
        Tipo: typeFile,
      },
      fotos: [
        {
          nome: "foto1",
          base64: foto1Base64,
          Tipo: typeFileFoto1,
        },
        {
          nome: "foto2",
          base64: foto2Base64,
          Tipo: typeFileFoto2,
        },
        {
          nome: "foto3",
          base64: foto3Base64,
          Tipo: typeFileFoto3,
        },
        {
          nome: "foto4",
          base64: foto4Base64,
          Tipo: typeFileFoto4,
        },
      ],
    };
    console.log(Produto);
    const res = await addProduto.updateProduto(Produto);
    console.log("EvioForm", res);
    history.push("/produtos");
  }

  return (
    <ContainerProduto>
      <CartaoProd>
        <Form onSubmit={(e) => onFinish(e)}>
          <Typography variant="h4">Produto</Typography>
          <TextField
            onChange={(e) => setTitulo(e.target.value)}
            id="titulo"
            value={titulo}
            autoFocus={true}
            variant="standard"
            margin="normal"
          />
          <TextField
            select
            id="categoria"
            displayEmpty
            value={categoriaId || 3}
            variant="standard"
            onChange={(e) => setCategoria(e.target.value)}
            margin="normal"
          >
            {addProduto.categorias.map((categoria) => (
              <MenuItem
                key={categoria.categoriaId}
                value={categoria.categoriaId}
              >
                {categoria.categoria}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            multiline
            minRows={4}
            maxRows={10}
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
            variant="outlined"
            margin="normal"
            fullWidth={false}
          />
          <Typography variant="h5">Fotos</Typography>
          <ContainerFotos>
            <BoxUpload>
              <div className="image-upload">
                {!isUploaded ? (
                  <>
                    <LabelInputUpload
                      className="labelInputUpload"
                      htmlFor="upload-input-capa"
                    >
                      <img
                        src={FolderIcon}
                        draggable={"false"}
                        alt="placeholder"
                        style={{ width: 100, height: 100 }}
                      />
                      <p style={{ color: "#444" }}>
                        Clique para adicionar uma capa
                      </p>
                    </LabelInputUpload>

                    <input
                      id="upload-input-capa"
                      type="file"
                      accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                      onChange={(e) => handleImageChange(e, "capa")}
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
                  {!isUploadedFoto1 ? (
                    <>
                      <LabelInputUpload
                        className="labelInputUpload"
                        htmlFor="upload-input-foto1"
                      >
                        <img
                          src={FolderIconPequeno}
                          draggable={"false"}
                          alt="placeholder"
                          style={{ width: 50, height: 50 }}
                        />
                        <p style={{ color: "#444" }}>Foto1</p>
                      </LabelInputUpload>

                      <input
                        id="upload-input-foto1"
                        type="file"
                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                        onChange={(e) => handleImageChange(e, "foto1")}
                      />
                    </>
                  ) : (
                    <ImagePreviewPequeno>
                      <img
                        className="close-icon"
                        src={CloseIcon}
                        alt="CloseIcon"
                        onClick={() => {
                          setIsUploadedFoto1(false);
                          setFoto1(null);
                        }}
                      />
                      {typeFile.includes("video") ? (
                        <video
                          id="uploaded-image"
                          src={foto1}
                          draggable={foto1}
                          controls
                          autoPlay
                          alt="uploaded-img"
                        />
                      ) : (
                        <img
                          id="uploaded-image"
                          src={foto1}
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
                  {!isUploadedFoto2 ? (
                    <>
                      <LabelInputUpload
                        className="labelInputUpload"
                        htmlFor="upload-input-foto2"
                      >
                        <img
                          src={FolderIconPequeno}
                          draggable={"false"}
                          alt="placeholder"
                          style={{ width: 50, height: 50 }}
                        />
                        <p style={{ color: "#444" }}>Foto1</p>
                      </LabelInputUpload>

                      <input
                        id="upload-input-foto2"
                        type="file"
                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                        onChange={(e) => handleImageChange(e, "foto2")}
                      />
                    </>
                  ) : (
                    <ImagePreviewPequeno>
                      <img
                        className="close-icon"
                        src={CloseIcon}
                        alt="CloseIcon"
                        onClick={() => {
                          setIsUploadedFoto2(false);
                          setFoto2(null);
                        }}
                      />
                      {typeFile.includes("video") ? (
                        <video
                          id="uploaded-image"
                          src={foto2}
                          draggable={foto2}
                          controls
                          autoPlay
                          alt="uploaded-img"
                        />
                      ) : (
                        <img
                          id="uploaded-image"
                          src={foto2}
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
                  {!isUploadedFoto3 ? (
                    <>
                      <LabelInputUpload
                        className="labelInputUpload"
                        htmlFor="upload-input-foto3"
                      >
                        <img
                          src={FolderIconPequeno}
                          draggable={"false"}
                          alt="placeholder"
                          style={{ width: 50, height: 50 }}
                        />
                        <p style={{ color: "#444" }}>Foto1</p>
                      </LabelInputUpload>

                      <input
                        id="upload-input-foto3"
                        type="file"
                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                        onChange={(e) => handleImageChange(e, "foto3")}
                      />
                    </>
                  ) : (
                    <ImagePreviewPequeno>
                      <img
                        className="close-icon"
                        src={CloseIcon}
                        alt="CloseIcon"
                        onClick={() => {
                          setIsUploadedFoto3(false);
                          setFoto3(null);
                        }}
                      />
                      {typeFile.includes("video") ? (
                        <video
                          id="uploaded-image"
                          src={foto3}
                          draggable={foto3}
                          controls
                          autoPlay
                          alt="uploaded-img"
                        />
                      ) : (
                        <img
                          id="uploaded-image"
                          src={foto3}
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
                  {!isUploadedFoto4 ? (
                    <>
                      <LabelInputUpload
                        className="labelInputUpload"
                        htmlFor="upload-input-foto4"
                      >
                        <img
                          src={FolderIconPequeno}
                          draggable={"false"}
                          alt="placeholder"
                          style={{ width: 50, height: 50 }}
                        />
                        <p style={{ color: "#444" }}>Foto1</p>
                      </LabelInputUpload>

                      <input
                        id="upload-input-foto4"
                        type="file"
                        accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                        onChange={(e) => handleImageChange(e, "foto4")}
                      />
                    </>
                  ) : (
                    <ImagePreviewPequeno>
                      <img
                        className="close-icon"
                        src={CloseIcon}
                        alt="CloseIcon"
                        onClick={() => {
                          setIsUploadedFoto4(false);
                          setFoto4(null);
                        }}
                      />
                      {typeFile.includes("video") ? (
                        <video
                          id="uploaded-image"
                          src={foto4}
                          draggable={foto4}
                          controls
                          autoPlay
                          alt="uploaded-img"
                        />
                      ) : (
                        <img
                          id="uploaded-image"
                          src={foto4}
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
            value={preco}
            InputLabelProps={{
              focused: true,
            }}
            id="preco"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
            variant="standard"
            margin="normal"
          />
          <TextField
            onChange={(e) => setQuantidade(e.target.value)}
            id="quantidade"
            value={quantidade}
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
              ALTERAR PRODUTO
            </Button>
          </ContainerBtn>
        </Form>
      </CartaoProd>
    </ContainerProduto>
  );
}

export default FormUpdateProduto;
