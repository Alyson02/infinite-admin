import { Api } from "../../services/api";

export async function CreateProdutoRquest(produto) {
  try {
    const res = await Api.post("/produto", {
      nome: produto.nome,
      estoque: produto.quantidade,
      preco: produto.preco,
      pontos: 0,
      categoriaId: produto.categoria,
      descricao: produto.descricao,
      capa: produto.capa,
      fotos: produto.fotos,
    });
    console.log(res)
    return res;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export async function UpdateProdutoRquest(produto) {
  try {
    const res = await Api.put(`/produto/${produto.id}`, {
      produtoId: produto.id,
      nome: produto.nome,
      estoque: produto.quantidade,
      preco: produto.preco,
      pontos: 0,
      categoriaId: produto.categoria,
      descricao: produto.descricao,
      capa: produto.capa,
      fotos: produto.fotos,
    });
    console.log(res)
    return res;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export async function GetCategorias(){
  try {
    const res = await Api.get('/categoria');
    console.log(res.data)
    return res.data
  } catch (error) {
    return null
  }
}
