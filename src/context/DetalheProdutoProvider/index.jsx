import { useEffect, useState } from "react";
import { createContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getProduto } from "./util";

export const DetalheProdutoContext = createContext();

export const DetalheProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState({});
  const [fotos, setFotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetProduto();
  }, []);

  async function GetProduto() {
    const dados = await getProduto(`/produto/${id}`);
    if (dados) {
      console.log("Produto", dados.data);
      setProduto(dados.data);
      setFotos(dados.data.urlFotos)
    }
  }

  return (
    <DetalheProdutoContext.Provider value={{ GetProduto, produto, fotos }}>
      {children}
    </DetalheProdutoContext.Provider>
  );
};
