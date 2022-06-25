import React, { createContext, useEffect, useState } from "react";
import { CreateProdutoRquest, GetCategorias } from "./util";

export const AddProdutoContext = createContext();

export const AddProdutoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    
    useEffect(() => {
      getCategorias()
    }, []);

    async function getCategorias(){
      const dados = await GetCategorias();
      if(dados){
        console.log("Categorias", dados.data);
        setCategorias(dados.data)
      }
    }


    async function addProduto(produto){
        await CreateProdutoRquest(produto);
    }

    return (
      <AddProdutoContext.Provider value={{ addProduto, categorias, getCategorias }}>
        {children} 
      </AddProdutoContext.Provider>
    );
  };