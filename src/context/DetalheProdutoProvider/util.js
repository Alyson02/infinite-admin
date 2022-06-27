import { Api } from "../../services/api"

export const getProduto = async(url) =>{
    const res = await Api.get(url);
    return res.data;
}