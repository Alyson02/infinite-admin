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
      capa: {
        nome: produto.nomeCapa,
        base64: produto.capaBase64,
      },
      fotos: produto.fotos,
    });

    return res;
  } catch (error) {
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
