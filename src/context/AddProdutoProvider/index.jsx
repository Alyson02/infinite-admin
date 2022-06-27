import React, { createContext, useEffect, useState } from "react";
import { CreateProdutoRquest, GetCategorias, UpdateProdutoRquest } from "./util";

export const AddProdutoContext = createContext();

export const AddProdutoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias();
  }, []);

  async function getCategorias() {
    const dados = await GetCategorias();
    if (dados) {
      console.log("Categorias", dados.data);
      setCategorias(dados.data);
    }
  }

  async function addProduto(produto) {
    const res = await CreateProdutoRquest(produto);
    console.log(res);
  }

  async function updateProduto(produto) {
    const res = await UpdateProdutoRquest(produto);
    console.log(res);
  }

  return (
    <AddProdutoContext.Provider
      value={{ addProduto, categorias, getCategorias, updateProduto }}
    >
      {children}
    </AddProdutoContext.Provider>
  );
};
